import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { RegisterUserDTO } from "../../../application/dtos/auth/RegisterUserDTO.js";
import { AppError } from "../../../domain/errors/AppError.js";
import { IPasswordService } from "../../../domain/services/IPasswordService.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { Password } from "../../../domain/value-objects/Password.js";
import { IRegisterUserUseCase } from "./interfaces/IRegisterUserUseCase.js";
import { ConflictError, InternalServerError } from "../../../domain/errors/AppError.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../../../infrastructure/config/messages.js";
import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IPendingUserService } from "../../../domain/services/IPendingUserService.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { RegisterResponseDTO } from "../../dtos/auth/RegisterResponseDTOSchema.js";
import {inject, injectable } from 'inversify';
import { ILogger } from "../../../domain/services/ILogger.js";
import { TYPES } from "../../../infrastructure/di/types.js";
import { env } from "../../../infrastructure/config/env.js";

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
