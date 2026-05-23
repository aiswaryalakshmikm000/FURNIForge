import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { RegisterUserDTO } from "../../../application/dtos/auth/RegisterUserDTO";
import { AppError } from "../../../domain/errors/AppError";
import type { IPasswordService } from "../../../domain/services/IPasswordService";
import { Email } from "../../../domain/value-objects/Email";
import { Password } from "../../../domain/value-objects/Password";
import type { IRegisterUserUseCase } from "./interfaces/IRegisterUserUseCase";
import { ConflictError, InternalServerError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { IOtpService } from "../../../domain/services/IOtpservice";
import type { IPendingUserService } from "../../../domain/services/IPendingUserService";
import type { IEmailService } from "../../../domain/services/IEmailService";
import type { RegisterResponseDTO } from "../../dtos/auth/RegisterResponseDTOSchema";
import {inject, injectable } from 'inversify';
import type { ILogger } from "../../../domain/services/ILogger";
import { TYPES } from "../../../infrastructure/di/types";
import { env } from "../../../infrastructure/config/env";

@injectable()
export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
    @inject(TYPES.IPasswordService) private _passwordService: IPasswordService,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IPendingUserService) private _pendingUserService: IPendingUserService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
    @inject(TYPES.ILogger) private _logger: ILogger,
  ) {}

  async execute(data: RegisterUserDTO): Promise<RegisterResponseDTO > {
    try {
      const emailVO = new Email(data.email);
      const passwordVO = new Password(data.password);

      const existingUser = await this._userRepository.findByEmail(emailVO.value);
      if (existingUser && existingUser.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_EXISTS);
      }

      const existingUserByPhone = await this._userRepository.findByPhone(data.phone);
      if (existingUserByPhone && existingUserByPhone.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS);
      }

      const hashedPassword = await this._passwordService.hash(passwordVO.value);

      const { tempUserId, email } = await this._pendingUserService.createOrUpdate({
        email: emailVO.value,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        passwordHash: hashedPassword,
      });

      const otp = await this._otpService.generateAndHandleOtp(tempUserId, email)
      
      try{
        await this._emailService.sendOTPEmail(email, otp.otp, data.firstName);
      } catch (error) {
        await this._pendingUserService.delete(email, tempUserId);
        throw error;
      }

      return { meta: { tempUserId , email, cooldown: env.OTP.RESEND_DELAY }};

    } catch (error) {
      if (error instanceof AppError) throw error;

      this._logger.error(`RegisterUserUseCase Error: ${error instanceof Error ? error.message : error}`);

      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}
