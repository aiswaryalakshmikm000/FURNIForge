import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { RegisterUserDTO } from "@application/dtos/auth/RegisterUserDTO.js";
import { AppError } from "@domain/errors/AppError.js";
import { IPasswordService } from "@domain/services/IPasswordService.js";
import { Email } from "@domain/value-objects/Email.js";
import { Password } from "@domain/value-objects/Password.js";
import { IRegisterUserUseCase } from "./interfaces/IRegisterUserUseCase.js";
import { ConflictError, InternalServerError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { IOtpService } from "@domain/services/IOtpservice.js";
import { IPendingUserService } from "@domain/services/IPendingUserService.js";
import { IEmailService } from "@domain/services/IEmailService.js";
import { AuthActionResponseDTO } from "@application/dtos/auth/AuthActionResponseDTO.js";
import {inject, injectable } from 'inversify';
import { ILogger } from "@domain/services/ILogger.js";
import { TYPES } from "@infrastructure/di/types.js";

@injectable()
export class RegisterUserUseCase implements IRegisterUserUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
    @inject(TYPES.IPasswordService) private passwordService: IPasswordService,
    @inject(TYPES.IOtpService) private otpService: IOtpService,
    @inject(TYPES.IPendingUserService) private pendingUserService: IPendingUserService,
    @inject(TYPES.IEmailService) private emailService: IEmailService,
    @inject(TYPES.ILogger) private logger: ILogger,
  ) {}

  async execute(data: RegisterUserDTO): Promise<AuthActionResponseDTO > {
    try {
      const emailVO = new Email(data.email);
      const passwordVO = new Password(data.password);

      const existingUser = await this.userRepository.findByEmail(emailVO.value);
      if (existingUser && existingUser.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_EXISTS);
      }

      const existingUserByPhone = await this.userRepository.findByPhone(data.phone);
      if (existingUserByPhone && existingUserByPhone.isVerified) {
        throw new ConflictError(ERROR_MESSAGES.AUTH.PHONE_ALREADY_EXISTS);
      }

      const hashedPassword = await this.passwordService.hash(passwordVO.value);

      const { tempUserId } = await this.pendingUserService.createOrUpdate({
        email: emailVO.value,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        passwordHash: hashedPassword,
      });

      const otp = await this.otpService.generateAndHandleOtp(tempUserId, emailVO.value)
      
      try{
        await this.emailService.sendOTPEmail(emailVO.value, otp.otp, data.firstName);
      } catch (error) {
        await this.pendingUserService.delete(emailVO.value);
        throw error;
      }

      return {message: SUCCESS_MESSAGES.AUTH.OTP_SUCCESS, meta: { tempUserId, email: emailVO.value }};

    } catch (error) {
      if (error instanceof AppError) throw error;

      this.logger.error(`RegisterUserUseCase Error: ${error instanceof Error ? error.message : error}`);

      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}
