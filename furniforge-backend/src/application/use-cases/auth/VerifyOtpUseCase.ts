import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IPendingUserService } from "../../../domain/services/IPendingUserService.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { VerifyOtpDTO } from "../../../application/dtos/auth/VerifyOtpDTO.js";
import { NotFoundError } from "../../../domain/errors/AppError.js";
import { User } from "../../../domain/entities/User.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
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
import { ICreateLeadUseCase } from "../lead/interfaces/ICreateLeadUseCase.js";

@injectable()
export class VerifyOtpUseCase implements IVerifyOtpUseCase {
  constructor(
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IPendingUserService) private _pendingUserService: IPendingUserService,
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
    @inject(TYPES.ILogger) private _logger: ILogger,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
    @inject(TYPES.ICreateLeadUseCase) private _createLeadUseCase: ICreateLeadUseCase
  ) {}

  async execute(data: VerifyOtpDTO): Promise<AuthResult> {
    try {
      const otpVO = new OTP(data.otp)

      const pendingUser = await this._pendingUserService.getByTempUserId(data.tempUserId);
      if (!pendingUser) {
        throw new NotFoundError(ERROR_MESSAGES.AUTH.PENDING_USER_NOT_FOUND);
      }

      await this._otpService.verifyOtp(pendingUser.tempUserId, pendingUser.email, otpVO.value);

      const user = User.create({
        firstName: pendingUser.firstName,
        lastName: pendingUser.lastName,
        email: pendingUser.email,
        phone: pendingUser.phone,
        passwordHash: pendingUser.passwordHash,
      });

      user.verifyEmail();

      const createdUser = await this._userRepository.create(user);
    
      await this._createLeadUseCase.execute(createdUser);

      await this._pendingUserService.delete(pendingUser.email, pendingUser.tempUserId);

      const sessionId = crypto.randomUUID();
      const payload = {sub: createdUser.id, email: createdUser.email.value, role: createdUser.role, sessionId}

      const accessToken = this._tokenService.generateAccessToken(payload);

      const refreshToken = this._tokenService.generateRefreshToken(payload);

      await this._sessionService.create( sessionId, { userId: createdUser.id, status: "active" }, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 );

      try {
        await this._emailService.sendWelcomeEmail(createdUser.email.value, createdUser.firstName)
      } catch (error){
        this._logger.error("Welcome email failed", {email: createdUser.email.value, error});
      }

      return {user: UserMapper.toResponse(createdUser), accessToken, refreshToken}
      

    } catch (error) {
      if (error instanceof AppError) throw error;

      this._logger.error("Unexpected error in VerifyOtpUseCase", {error})
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    
    }
  }
}