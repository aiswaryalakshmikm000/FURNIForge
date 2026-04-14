import { ISessionService } from "@domain/services/ISessionService.js";
import { ITokenService } from "@domain/services/ITokenService.js";
import { UnauthorizedError } from "@domain/errors/AppError.js";
import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import IRefreshTokenUseCase from "@application/use-cases/auth/interfaces/IRefreshTokenUseCase.js"
import {inject, injectable } from 'inversify';
import { TYPES } from "@infrastructure/di/types.js";
import { RefreshTokenResultDTO } from "@application/dtos/auth/RefreshTokenResultDTO.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "@infrastructure/config/cookies.js";

@injectable()
export class RefreshTokenUseCase implements IRefreshTokenUseCase {
  constructor(
    @inject(TYPES.ITokenService) private tokenService: ITokenService,
    @inject(TYPES.ISessionService) private sessionService: ISessionService,
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
  ) {}

  async execute(refreshToken: string): Promise<RefreshTokenResultDTO> {
    const payload = this.tokenService.verifyRefreshToken(refreshToken);

    const session  = await this.sessionService.get(payload.sessionId);
    if (!session ) throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_NOT_FOUND);

    if(session.status !== "active") {
      await this.sessionService.invalidateAllUserSessions(session.userId)
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.SESSION_CONFLICT);
    }
    const user = await this.userRepository.findById(payload.sub);

    if (!user || !user.isVerified) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.USER_INVALID);
    }

    const newSessionId = crypto.randomUUID();

    const newPayload = {
      sub: user.id,
      email: user.email.value,
      role: user.role,
      sessionId: newSessionId,
    };

    const accessToken = this.tokenService.generateAccessToken(newPayload);
    const newRefreshToken = this.tokenService.generateRefreshToken(newPayload);

    await this.sessionService.create(newSessionId, { userId: user.id , status: "active"}, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60);

    //rotate session
    await this.sessionService.markAsRotated(payload.sessionId);

    return { accessToken, refreshToken: newRefreshToken };
  }
}
