import { injectable, inject } from "inversify";
import { ILoginUseCase } from "./interfaces/ILoginUseCase.js";
import { IUserRepository } from "@domain/repositories/IUserRepository.js";
import { IPasswordService } from "@domain/services/IPasswordService.js";
import { ITokenService } from "@domain/services/ITokenService.js";
import { ISessionService } from "@domain/services/ISessionService.js";
import { AuthResult } from "@application/dtos/auth/AuthResult.js";
import { LoginDTO } from "@application/dtos/auth/LoginUserDTO.js";
import { Email } from "@domain/value-objects/Email.js";
import { UnauthorizedError } from "@domain/errors/AppError.js";
import { TYPES } from "@infrastructure/di/types.js"
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { REFRESH_TOKEN_EXPIRES_DAYS } from "@infrastructure/config/cookies.js";
import { UserMapper } from "@application/mappers/UserMapper.js";

@injectable()
export class LoginUseCase implements ILoginUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private userRepository: IUserRepository,
    @inject(TYPES.IPasswordService) private passwordService: IPasswordService,
    @inject(TYPES.ITokenService) private tokenService: ITokenService,
    @inject(TYPES.ISessionService) private sessionService: ISessionService,
  ) {}

  async execute(data: LoginDTO): Promise<AuthResult> {
    const emailVO = new Email(data.email);

    const user = await this.userRepository.findByEmail(emailVO.value);

    if (!user) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }

    if (!user.isVerified) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.ACCOUNT_NOT_VERIFIED);
    }

    const isMatch = await this.passwordService.compare(data.password, user.passwordHash);

    if (!isMatch) {
      throw new UnauthorizedError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }

    const sessionId = crypto.randomUUID();

    const payload = { sub: user.id, email: user.email.value, role: user.role, sessionId };

    const accessToken = this.tokenService.generateAccessToken(payload);
    const refreshToken = this.tokenService.generateRefreshToken(payload);

    await this.sessionService.create( sessionId, { userId: user.id, status: "active" }, REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 );

    return { user: UserMapper.toResponse(user), accessToken, refreshToken } }
}