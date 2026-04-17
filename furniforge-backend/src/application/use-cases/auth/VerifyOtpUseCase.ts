import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IPendingUserService } from "../../../domain/services/IPendingUserService.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { VerifyOtpDTO } from "../../../application/dtos/auth/VerifyOtpDTO.js";
import { NotFoundError } from "../../../domain/errors/AppError.js";
import { User } from "../../../domain/entities/User.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { OTP } from "../../../domain/value-objects/OTP.js";
import { InternalServerError } from "../../../domain/errors/AppError.js";
import { AppError } from "../../../domain/errors/AppError.js";
import { IVerifyOtpUseCase } from "./interfaces/IVerifyOtpUseCase.js";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { ILogger } from "../../../domain/services/ILogger.js";
import { ITokenService } from "../../../domain/services/ITokenService.js";
import { ISessionService } from "../../../domain/services/ISessionService.js";
import { AuthResult } from "../../../application/dtos/auth/AuthResult.js";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "../../../infrastructure/config/cookies.js";
import { UserMapper } from "../../../application/mappers/UserMapper.js";

@injectable()
export class VerifyOtpUseCase implements IVerifyOtpUseCase {
  constructor(
    @inject(TYPES.IOtpService) private otpService: IOtpService,
    @inject(TYPES.IPendingUserService) private pendingUserService: IPendingUserService,
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
    @inject(TYPES.IEmailService) private emailService: IEmailService,
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.ITokenService) private tokenService: ITokenService,
    @inject(TYPES.ISessionService) private sessionService: ISessionService
  ) {}

  async execute(data: VerifyOtpDTO): Promise<AuthResult> {
    try {
      const emailVO = new Email(data.email)  
      const otpVO = new OTP(data.otp)

      const pendingUser = await this.pendingUserService.get(emailVO.value);
      if (!pendingUser) {
        throw new NotFoundError(ERROR_MESSAGES.AUTH.PENDING_USER_NOT_FOUND);
      }

      await this.otpService.verifyOtp(pendingUser.tempUserId, emailVO.value, otpVO.value);

      const user = User.create({
        firstName: pendingUser.firstName,
        lastName: pendingUser.lastName,
        email: pendingUser.email,
        phone: pendingUser.phone,
        passwordHash: pendingUser.passwordHash,
      });

      user.verifyEmail();

      const createdUser = await this.userRepository.create(user);
      await this.pendingUserService.delete(emailVO.value);

      const sessionId = crypto.randomUUID();
      const payload = {sub: createdUser.id, email: createdUser.email.value, role: createdUser.role, sessionId}

      const accessToken = this.tokenService.generateAccessToken(payload);

      const refreshToken = this.tokenService.generateRefreshToken(payload);

      await this.sessionService.create( sessionId, { userId: createdUser.id, status: "active" }, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 );

      try {
        await this.emailService.sendWelcomeEmail(createdUser.email.value, createdUser.firstName)
      } catch (error){
        this.logger.error("Welcome email failed", {email: createdUser.email.value, error});
      }

      return {user: UserMapper.toResponse(createdUser), accessToken, refreshToken}
      

    } catch (error) {
      if (error instanceof AppError) throw error;

      this.logger.error("Unexpected error in VerifyOtpUseCase", {error})
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    
    }
  }
}