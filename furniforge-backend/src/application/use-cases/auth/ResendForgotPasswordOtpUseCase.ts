import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUserRepository } from "../../../domain/repositories/IUserRepository";
import type { IOtpService } from "../../../domain/services/IOtpservice";
import type { IEmailService } from "../../../domain/services/IEmailService";
import type { ResendForgotPasswordOtpDTO } from "../../dtos/auth/ForgotPasswordDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { ResendOtpResponseDTO } from "../../dtos/auth/ResendOtpResponseDTO";
import { env } from "../../../infrastructure/config/env";
import type { IResendForgotPasswordOtpUseCase } from "./interfaces/IResendForgotPasswordOtpUseCase";

@injectable()
export class ResendForgotPasswordOtpUseCase implements IResendForgotPasswordOtpUseCase{
  constructor(
    @inject(TYPES.IUserRepository) private _userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService
  ) {}

  async execute(data: ResendForgotPasswordOtpDTO): Promise<ResendOtpResponseDTO> {
    const user = await this._userRepo.findByEmail(data.email);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    const otp = await this._otpService.generateAndHandleOtp( user.id, user.email.value );

    await this._emailService.sendOTPEmail( user.email.value, otp.otp, user.firstName );

    return { meta: { email: user.email.value, cooldown: env.OTP.RESEND_DELAY  } };
  }
}