import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { ResendForgotPasswordOtpDTO } from "../../dtos/auth/ForgotPasswordDTO.js";
import { NotFoundError } from "../../../domain/errors/AppError.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { ResendOtpResponseDTO } from "../../dtos/auth/ResendOtpResponseDTO.js";
import { env } from "../../../infrastructure/config/env.js";
import { IResendForgotPasswordOtpUseCase } from "./interfaces/IResendForgotPasswordOtpUseCase.js";

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