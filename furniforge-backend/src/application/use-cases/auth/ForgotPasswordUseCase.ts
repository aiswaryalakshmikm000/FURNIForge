import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { NotFoundError } from "../../../domain/errors/AppError.js";
import { ForgotPasswordDTO, ForgotPasswordResponseDTO } from "../../dtos/auth/ForgotPasswordDTO.js";
import { Email } from "../../../domain/value-objects/Email.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { env } from "../../../infrastructure/config/env.js";

@injectable()
export class ForgotPasswordUseCase {
  constructor(
    @inject(TYPES.IUserRepository) private userRepo: IUserRepository,
    @inject(TYPES.IOtpService) private otpService: IOtpService,
    @inject(TYPES.IEmailService) private emailService: IEmailService
  ) {}

  async execute(data: ForgotPasswordDTO): Promise<ForgotPasswordResponseDTO> {
    const emailVO = new Email(data.email);

    const user = await this.userRepo.findByEmail(emailVO.value);
    if (!user) throw new NotFoundError(ERROR_MESSAGES.USER.NOT_FOUND);

    const otpToken = await this.otpService.generateAndHandleOtp(
      user.id,
      user.email.value
    );

    await this.emailService.sendOTPEmail(user.email.value, otpToken.otp, user.firstName);
    return { meta: { email: user.email.value, cooldown: env.OTP.RESEND_DELAY }};
  }
}