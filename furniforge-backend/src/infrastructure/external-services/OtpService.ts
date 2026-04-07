import { IOtpService } from "@domain/services/IOtpservice.js";
import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { OtpToken } from "@domain/entities/OtpToken.js";
import { ConflictError, BadRequestError, TooManyRequestsError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { env } from "@infrastructure/config/env.js";
import { injectable, inject } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";

@injectable()
export class OtpService implements IOtpService {
  private readonly TTL = env.OTP.EXPIRY;

  constructor(
    @inject(TYPES.IOTPRepository) private otpRepository: IOTPRepository
  ) {}

  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async generateAndHandleOtp(userId: string, email: string): Promise<OtpToken> {
    const existing = await this.otpRepository.getByUserId(userId);

    if (existing && !existing.isExpired()) {
      throw new ConflictError(ERROR_MESSAGES.AUTH.OTP_ALREADY_SENT);
    }

    if (existing) {
      await this.otpRepository.delete(existing);
    }

    const otpCode = this.generateOTP();

    const otpToken = OtpToken.create(userId, email, otpCode, this.TTL);

    await this.otpRepository.save(otpToken, this.TTL);

    console.log("Saved OTP:", otpToken);
    console.log("User OTP Key:", `otp:user:${userId}`);
    console.log("User OTP Key:", `otp:${otpToken.otpId}`);
    console.log("Code Key:", `otp:code:${email}:${otpCode}`);
    console.log("TTL:", `otp:user:${userId}`);

    return otpToken;
  }

  async verifyOtp( userId: string, email: string, inputOtp: string ): Promise<OtpToken> {

    const existing = await this.otpRepository.getByUserId(userId);

    if (!existing) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_NOT_FOUND);
    }

    if (existing.email !== email) {
      throw new BadRequestError("Invalid OTP request");
    }

    if (existing.isExpired()) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_EXPIRED);
    }

    try {
      existing.verify(inputOtp);
    } catch (err: any) {

      await this.otpRepository.update(existing);

      if(err instanceof TooManyRequestsError){
        await this.otpRepository.delete(existing)
      }
      err.meta = {
        remainingAttempts: existing.remainingAttempts
      }
      throw err;
    }
    
    await this.otpRepository.delete(existing);
    return existing;
  }
}


