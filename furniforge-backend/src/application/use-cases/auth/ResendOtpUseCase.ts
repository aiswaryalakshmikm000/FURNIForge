import { IOtpService } from "@domain/services/IOtpservice.js";
import { IPendingUserService } from "@domain/services/IPendingUserService.js";
import { IEmailService } from "@domain/services/IEmailService.js";
import { AuthActionResponseDTO } from "@application/dtos/auth/AuthActionResponseDTO.js";
import { AppError, NotFoundError, InternalServerError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { env } from "@infrastructure/config/env.js";
import { inject, injectable } from "inversify";
import { TYPES} from "@infrastructure/di/types.js"
import { Logger } from "winston";
import { Email } from "@domain/value-objects/Email.js";
import { ResendOtpDTO } from "@application/dtos/auth/ResendOtpDTO.js";

@injectable()
export class ResendOtpUseCase {
  constructor(
    @inject(TYPES.IPendingUserService) private pendingUserService: IPendingUserService,
    @inject(TYPES.IOtpService) private otpService: IOtpService,
    @inject(TYPES.IEmailService) private emailService: IEmailService,
    @inject(TYPES.Logger) private logger: Logger
  ) {}

  async execute(data: ResendOtpDTO): Promise<AuthActionResponseDTO> {
    try {
      const emailVO = new Email(data.email)
      const pendingUser = await this.pendingUserService.get(emailVO.value);

      if (!pendingUser) {
       throw new NotFoundError(ERROR_MESSAGES.AUTH.PENDING_USER_NOT_FOUND);
      }

      const otp = await this.otpService.generateAndHandleOtp(pendingUser.tempUserId, pendingUser.email);

      await this.emailService.sendOTPEmail(pendingUser.email, otp.otp, pendingUser.firstName);

      return {
        message: SUCCESS_MESSAGES.AUTH.RESEND_OTP_SUCCESS,
        meta: { email: pendingUser.email, cooldown: env.OTP.RESEND_DELAY }
      };
    } catch (error) {
      this.logger.error("ResendOtpUseCase Error", {error});

      if (error instanceof AppError) throw error
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}