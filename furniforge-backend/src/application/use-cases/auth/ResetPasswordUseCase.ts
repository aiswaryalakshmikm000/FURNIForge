import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IPasswordService } from "../../../domain/services/IPasswordService";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import type { ResetPasswordDTO } from "../../dtos/auth/ForgotPasswordDTO";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { ISessionService } from "../../../domain/services/ISessionService";
import type { ITokenService } from "../../../domain/services/ITokenService";
import type { IResetPasswordUseCase } from "./interfaces/IResetPasswordUseCase";

@injectable()
export class ResetPasswordUseCase implements IResetPasswordUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepo: IUserRepository,
    @inject(TYPES.IPasswordService) private _passwordService: IPasswordService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
  ) {}

  async execute(data: ResetPasswordDTO): Promise<void> {
    const payload = this._tokenService.verifyResetToken(data.resetToken);

    const user = await this._userRepo.findById(payload.userId);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    if(!user.passwordHash) throw new BadRequestError(ERROR_MESSAGES.AUTH.PASSWORD_NOT_SET)

    const isSame = await this._passwordService.compare(data.password, user.passwordHash)
    if(isSame) throw new BadRequestError(ERROR_MESSAGES.AUTH.OLD_PASSWORD);

    const hashed = await this._passwordService.hash(data.password)
    await this._userRepo.updatePassword(user.id, hashed)

    await this._sessionService.invalidateAllUserSessions(user.id)
  }
}