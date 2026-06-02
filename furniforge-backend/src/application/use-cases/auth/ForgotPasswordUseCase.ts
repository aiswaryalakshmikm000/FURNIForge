import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IOtpService } from "../../../domain/services/IOtpservice";
import type { IEmailService } from "../../../domain/services/IEmailService";
import { NotFoundError } from "../../../domain/errors/AppError";
import type { ForgotPasswordDTO, ForgotPasswordResponseDTO } from "../../dtos/auth/ForgotPasswordDTO";
import { Email } from "../../../domain/value-objects/Email";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { env } from "../../../infrastructure/config/env";
import type { IForgetPasswordUseCase } from "./interfaces/IForgetPasswordUseCase";

@injectable()
export class ForgotPasswordUseCase implements IForgetPasswordUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private _userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
  ) {}

  async execute(data: ForgotPasswordDTO): Promise<ForgotPasswordResponseDTO> {
    const emailVO = new Email(data.email);

    const user = await this._userRepo.findByEmail(emailVO.value);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);
    if (!user.isVerified)
      throw new NotFoundError(ERROR_MESSAGES.AUTH.ACCOUNT_NOT_VERIFIED);

    const otpToken = await this._otpService.generateAndHandleOtp(
      user.id,
      user.email.value,
    );

    await this._emailService.sendOTPEmail(
      user.email.value,
      otpToken.otp,
      user.firstName,
    );

    return {
      meta: { email: user.email.value, cooldown: env.OTP.RESEND_DELAY },
    };
  }
}
