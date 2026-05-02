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

@injectable()
export class ResetPasswordUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private otpService: IOtpService,
    @inject(TYPES.IPasswordService) private passwordService: IPasswordService,
    @inject(TYPES.ISessionService) private sessionService: ISessionService,
    @inject(TYPES.ITokenService) private tokenService: ITokenService,
  ) {}

  async execute(data: ResetPasswordDTO): Promise<void> {
    const payload = this.tokenService.verifyResetToken(data.resetToken);

    const user = await this.userRepo.findById(payload.userId);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    const isSame = await this.passwordService.compare(data.password, user.passwordHash)
    if(isSame) throw new BadRequestError(ERROR_MESSAGES.AUTH.OLD_PASSWORD);

    const hashed = await this.passwordService.hash(data.password)
    await this.userRepo.update(user.id, {passwordHash: hashed})

    await this.sessionService.invalidateAllUserSessions(user.id)
  }
}