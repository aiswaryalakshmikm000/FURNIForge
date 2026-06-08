import type { IOtpService } from "../../../domain/services/IOtpservice";
import type { IPendingUserService } from "../../../domain/services/IPendingUserService";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IEmailService } from "../../../domain/services/IEmailService";
import type { VerifyOtpDTO } from "../../../application/dtos/auth/VerifyOtpDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { User } from "../../../domain/entities/User";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { OTP } from "../../../domain/value-objects/OTP";
import { InternalServerError } from "../../../domain/errors/AppError";
import { AppError } from "../../../domain/errors/AppError";
import type { IVerifyOtpUseCase } from "./interfaces/IVerifyOtpUseCase";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ILogger } from "../../../domain/services/ILogger";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { ISessionService } from "../../../domain/services/ISessionService";
import { AuthResult } from "../../../application/dtos/auth/AuthResult";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "../../../infrastructure/config/cookies";
import { UserMapper } from "../../../application/mappers/user/UserMapper";
import type { ICreateLeadUseCase } from "../lead/interfaces/ICreateLeadUseCase";

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