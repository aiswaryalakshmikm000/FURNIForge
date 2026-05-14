import { injectable, inject } from "inversify";
import type { ILoginUseCase } from "./interfaces/ILoginUseCase";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IPasswordService } from "../../../domain/services/IPasswordService";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { ISessionService } from "../../../domain/services/ISessionService";
import { AuthResult } from "../../../application/dtos/auth/AuthResult";
import type { LoginDTO } from "../../../application/dtos/auth/LoginUserDTO";
import { Email } from "../../../domain/value-objects/Email";
import { UnauthorizedError } from "../../../domain/errors/AppError";
import { TYPES } from "../../../infrastructure/di/types"
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "../../../infrastructure/config/cookies";
import { UserMapper } from "../../../application/mappers/UserMapper";
import { ERROR_CODES } from "../../../shared/constants/errorCodes";

@injectable()
export class LoginUseCase implements ILoginUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepository: IUserRepository,
    @inject(TYPES.IPasswordService) private _passwordService: IPasswordService,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
  ) {}

  async execute(data: LoginDTO): Promise<AuthResult> {
    const emailVO = new Email(data.email);

    const user = await this._userRepository.findByEmail(emailVO.value);

    if (!user) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS, ERROR_CODES.AUTH.INVALID_CREDENTIALS);
    }

    if (!user.isVerified) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.ACCOUNT_NOT_VERIFIED, ERROR_CODES.AUTH.ACCOUNT_NOT_VERIFIED);
    }

    const isMatch = await this._passwordService.compare(data.password, user.passwordHash);

    if (!isMatch) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS, ERROR_CODES.AUTH.INVALID_CREDENTIALS);
    }

    const sessionId = crypto.randomUUID();

    const payload = { sub: user.id, email: user.email.value, role: user.role, sessionId };

    const accessToken = this._tokenService.generateAccessToken(payload);
    const refreshToken = this._tokenService.generateRefreshToken(payload);

    await this._sessionService.create( sessionId, { userId: user.id, status: "active" }, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 );

    return { user: UserMapper.toResponse(user), accessToken, refreshToken } }
}