import type { IOtpService } from "../../domain/services/IOtpservice";
import type { IOTPRepository } from "../../domain/repositories/IOTPRepository";
import { OtpToken } from "../../domain/entities/OtpToken";
import { AppError, BadRequestError, TooManyRequestsError } from "../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../infrastructure/config/messages";
import { env } from "../../infrastructure/config/env";
import { injectable, inject } from "inversify";
import { TYPES } from "../../infrastructure/di/types";

@injectable()
export class OtpService implements IOtpService {
  private readonly _TTL = env.OTP.EXPIRY;

  constructor(
    @inject(TYPES.IOTPRepository) private _otpRepository: IOTPRepository,
  ) {}

  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async generateAndHandleOtp(userId: string, email: string): Promise<OtpToken> {
    const existing = await this._otpRepository.getByUserId(userId);

    if(existing){
      const now = Date.now();
      const diffSeconds = (now - existing.createdAt.getTime()) / 1000

      if(diffSeconds < env.OTP.RESEND_DELAY){
        const remaining = Math.ceil(env.OTP.RESEND_DELAY - diffSeconds);

        throw new TooManyRequestsError(`Please wait ${remaining}s before requesting a new OTP`, null, {remainingSeconds: remaining})
      }

      await this._otpRepository.delete(existing);
    }

    const otpCode = this.generateOTP();
    const otpToken = OtpToken.create(userId, email, otpCode, this._TTL);

    await this._otpRepository.save(otpToken, this._TTL);

    // console.log("Saved OTP:", otpToken);
    // console.log("User OTP Key:", `otp:user:${userId}`);
    // console.log("User OTP Key:", `otp:${otpToken.otpId}`);
    // console.log("Code Key:", `otp:code:${email}:${otpCode}`);
    // console.log("TTL:", `otp:user:${userId}`);

    return otpToken;
  }

  async verifyOtp( userId: string, email: string, inputOtp: string ): Promise<OtpToken> {

    const existing = await this._otpRepository.getByUserId(userId);

    if (!existing) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_NOT_FOUND);
    }

    if (existing.email !== email) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.INVALID_OTP);
    }

    if (existing.isExpired()) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_EXPIRED);
    }

    try {
      existing.verify(inputOtp);
    } catch (err: unknown) {

      if(err instanceof TooManyRequestsError){
        await this._otpRepository.delete(existing)
      } else {
         await this._otpRepository.update(existing);
      }
      if (err instanceof AppError) {
        err.meta = { remainingAttempts: existing.remainingAttempts }
      }
      throw err;
    }
    
    await this._otpRepository.delete(existing);
    return existing;
  }
}


