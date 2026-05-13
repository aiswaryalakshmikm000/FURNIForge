import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IPasswordService } from "../../../domain/services/IPasswordService.js";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError.js";
import { ResetPasswordDTO } from "../../dtos/auth/ForgotPasswordDTO.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { ISessionService } from "../../../domain/services/ISessionService.js";
import { ITokenService } from "../../../domain/services/ITokenService.js";
import { IResetPasswordUseCase } from "./interfaces/IResetPasswordUseCase.js";

@injectable()
export class ResetPasswordUseCase implements IResetPasswordUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IPasswordService) private _passwordService: IPasswordService,
    @inject(TYPES.ISessionService) private _sessionService: ISessionService,
    @inject(TYPES.ITokenService) private _tokenService: ITokenService,
  ) {}

  async execute(data: ResetPasswordDTO): Promise<void> {
    const payload = this._tokenService.verifyResetToken(data.resetToken);

    const user = await this._userRepo.findById(payload.userId);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    const isSame = await this._passwordService.compare(data.password, user.passwordHash)
    if(isSame) throw new BadRequestError(ERROR_MESSAGES.AUTH.OLD_PASSWORD);

    const hashed = await this._passwordService.hash(data.password)
    await this._userRepo.update(user.id, {passwordHash: hashed})

    await this._sessionService.invalidateAllUserSessions(user.id)
  }
}