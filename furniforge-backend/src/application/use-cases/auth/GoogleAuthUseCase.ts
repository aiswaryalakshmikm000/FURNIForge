import { inject, injectable } from "inversify";
import { IGoogleAuthUseCase } from "./interfaces/IGoogleAuthUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IGoogleAuthService } from "../../../domain/services/IGoogleAuthService";
import type { AuthResult } from "../../dtos/auth/AuthResult";
import { User } from "../../../domain/entities/User";
import { UserMapper } from "../../mappers/user/UserMapper";
import type { GoogleAuthDTO } from "../../dtos/auth/GoogleAuthDTO";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { ISessionService } from "../../../domain/services/ISessionService";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "../../../infrastructure/config/cookies";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { ICreateLeadUseCase } from "../lead/interfaces/ICreateLeadUseCase";
import { InternalServerError } from "../../../domain/errors/AppError";


@injectable()
export class GoogleAuthUseCase implements IGoogleAuthUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
    @inject(TYPES.IGoogleAuthService) private _googleAuthService: IGoogleAuthService,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
    @inject(TYPES.ICreateLeadUseCase) private _createLeadUseCase: ICreateLeadUseCase,
  ) {}

  async execute(data: GoogleAuthDTO): Promise<AuthResult> {
    const googleUser = await this._googleAuthService.verifyToken(data.token);

    let user = await this._userRepository.findByOAuthId(
      "google",
      googleUser.googleId,
    );

    if (!user) {
      user = await this._userRepository.findByEmail(googleUser.email);
    }

    if (user && !user.oAuthProvider) {
      await this._userRepository.linkGoogleAccount(
        user.id,
        googleUser.googleId,
      );

      user = await this._userRepository.findById(user.id);

      if (!user) {
        throw new InternalServerError(ERROR_MESSAGES.AUTH.RELOAD_USER_FAILED);
      }
    }

    if (!user) {
      user = User.createGoogleUser({
        firstName: googleUser.firstName,
        lastName: googleUser.lastName,
        email: googleUser.email,
        googleId: googleUser.googleId,
        avatar: googleUser.avatar,
      });

      user = await this._userRepository.create(user);

      await this._createLeadUseCase.execute(user);
    }

    const sessionId = crypto.randomUUID();

    const payload = {
      sub: user.id,
      email: user.email.value,
      role: user.role,
      sessionId,
    };

    const accessToken = this._tokenService.generateAccessToken(payload);
    const refreshToken = this._tokenService.generateRefreshToken(payload);

    await this._sessionService.create(
      sessionId,
      { userId: user.id, status: "active" },
      REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60,
    );

    return { user: UserMapper.toResponse(user), accessToken, refreshToken };
  }
}