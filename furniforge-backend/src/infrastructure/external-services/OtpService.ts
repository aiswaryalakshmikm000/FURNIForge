import { IOtpService } from "@domain/services/IOtpservice.js";
import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { OtpToken } from "@domain/entities/OtpToken.js";
import { ConflictError, BadRequestError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class OtpService implements IOtpService {
  private readonly TTL = 300;

  constructor(private otpRepository: IOTPRepository) {}

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

    return otpToken;
  }

  async verifyOtp( userId: string, email: string, inputOtp: string ): Promise<OtpToken> {

    const existing = await this.otpRepository.getByCode(inputOtp, email);

    if (!existing) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_NOT_FOUND);
    }

    if (existing.isExpired()) {
      await this.otpRepository.delete(existing);
      throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_EXPIRED);
    }

    try {
      existing.verify(inputOtp);
    } catch (err: any) {
      await this.otpRepository.update(existing); 
      throw new BadRequestError(err.message);
    }

    await this.otpRepository.delete(existing);

    return existing;
  }
}


