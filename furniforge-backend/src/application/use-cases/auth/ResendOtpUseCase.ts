import { IOtpService } from "../../../domain/services/IOtpservice.js";
import { IPendingUserService } from "../../../domain/services/IPendingUserService.js";
import { IEmailService } from "../../../domain/services/IEmailService.js";
import { AppError, NotFoundError, InternalServerError } from "../../../domain/errors/AppError.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";
import { env } from "../../../infrastructure/config/env.js";
import { inject, injectable } from "inversify";
import { TYPES} from "../../../infrastructure/di/types.js"
import { ILogger } from "../../../domain/services/ILogger.js";
import { ResendOtpDTO } from "../../../application/dtos/auth/ResendOtpDTO.js";
import { IResendOtpUseCase } from "./interfaces/IResendOtpUseCase.js";
import { ResendOtpResponseDTO } from "../../dtos/auth/ResendOtpResponseDTO.js";

@injectable()
export class ResendOtpUseCase implements IResendOtpUseCase{
  constructor(
    @inject(TYPES.IPendingUserService) private _pendingUserService: IPendingUserService,
    @inject(TYPES.IOtpService) private _otpService: IOtpService,
    @inject(TYPES.IEmailService) private _emailService: IEmailService,
    @inject(TYPES.ILogger) private _logger: ILogger
  ) {}

  async execute(data: ResendOtpDTO): Promise<ResendOtpResponseDTO> {
    try {
      const pendingUser = await this._pendingUserService.getByTempUserId(data.tempUserId);

      if (!pendingUser) {
       throw new NotFoundError(ERROR_MESSAGES.AUTH.PENDING_USER_NOT_FOUND);
      }

      const otp = await this._otpService.generateAndHandleOtp(pendingUser.tempUserId, pendingUser.email);

      await this._emailService.sendOTPEmail(pendingUser.email, otp.otp, pendingUser.firstName);

      return {
        meta: { email: pendingUser.email, cooldown: env.OTP.RESEND_DELAY }
      };
    } catch (error) {
      this._logger.error("ResendOtpUseCase Error", {error});

      if (error instanceof AppError) throw error
      throw new InternalServerError(ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR);
    }
  }
}