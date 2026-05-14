import type { ISessionService } from "../../../domain/services/ISessionService"; 
import type { ITokenService } from "../../../domain/services/ITokenService";
import { UnauthorizedError } from "../../../domain/errors/AppError";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IRefreshTokenUseCase } from "../../../application/use-cases/auth/interfaces/IRefreshTokenUseCase"
import { inject, injectable } from 'inversify';
import { TYPES } from "../../../infrastructure/di/types";
import type { RefreshTokenResultDTO } from "../../../application/dtos/auth/RefreshTokenResultDTO";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "../../../infrastructure/config/cookies";
import { ERROR_CODES } from "../../../shared/constants/errorCodes";

@injectable()
export class RefreshTokenUseCase implements IRefreshTokenUseCase {
  constructor(
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
  ) {}

  async execute(refreshToken: string): Promise<RefreshTokenResultDTO> {
    const payload = this._tokenService.verifyRefreshToken(refreshToken);

    const session  = await this._sessionService.get(payload.sessionId);
    if (!session ) throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_NOT_FOUND, ERROR_CODES.AUTH.SESSION_EXPIRED);

    if(session.status !== "active") {
      await this._sessionService.invalidateAllUserSessions(session.userId)
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_CONFLICT, ERROR_CODES.AUTH.SESSION_CONFLICT);
    }
    const user = await this._userRepository.findById(payload.sub);

    if (!user || !user.isVerified) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.USER_INVALID, ERROR_CODES.AUTH.INVALID_USER);
    }

    const newSessionId = crypto.randomUUID();

    const newPayload = {
      sub: user.id,
      email: user.email.value,
      role: user.role,
      sessionId: newSessionId,
    };

    const accessToken = this._tokenService.generateAccessToken(newPayload);
    const newRefreshToken = this._tokenService.generateRefreshToken(newPayload);

    await this._sessionService.create(newSessionId, { userId: user.id , status: "active"}, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60);

    await this._sessionService.markAsRotated(payload.sessionId);

    return { accessToken, refreshToken: newRefreshToken };
  }
}
