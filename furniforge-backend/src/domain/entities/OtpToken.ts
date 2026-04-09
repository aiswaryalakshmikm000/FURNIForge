import { BadRequestError, TooManyRequestsError } from "@domain/errors/AppError.js";
import { env } from "@infrastructure/config/env.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { OTP } from "@domain/value-objects/OTP.js";

export class OtpToken {
  private constructor(
    public readonly  otpId: string,
    public readonly userId: string,
    public readonly  email: string,
    private _otp: OTP,
    private _attempts: number,
    private _maxAttempts: number,
    private _isVerified: boolean,
    private _expiresAt: Date,
    private _createdAt: Date,
  ) {}

  static create(userId: string, email: string, otp: string, ttlSeconds: number = env.OTP.EXPIRY): OtpToken {
    const otpId = `otp_${Date.now()}_${Math.random()}`;

    return new OtpToken(
      otpId,
      userId,
      email,
      new OTP(otp),
      0,
      env.OTP.MAX_ATTEMPTS,
      false,
      new Date(new Date().getTime() + ttlSeconds * 1000),
      new Date(),
    );
  }

  static fromPersistence(raw: any): OtpToken {
  return new OtpToken(
      raw.otpId,
      raw.userId,
      raw.email,
      new OTP(raw._otp?._value),
      raw._attempts ?? 0,
      raw._maxAttempts ?? env.OTP.MAX_ATTEMPTS,
      raw._isVerified ?? false,
      new Date(raw._expiresAt),
      new Date(raw._createdAt)
    );
  }

  verify(input: string) {
    const inputOtp = new OTP(input)
    if (this._isVerified) throw new BadRequestError("OTP already used");
    if (this.isExpired()) throw new BadRequestError(ERROR_MESSAGES.AUTH.OTP_EXPIRED);
    if (!this.canRetry()) {
    throw new TooManyRequestsError(ERROR_MESSAGES.AUTH.OTP_MAX_ATTEMPTS);
  }
    if (!this._otp.equals(inputOtp)) {
      this.incrementAttempts();
        if (!this.canRetry()) {
          throw new TooManyRequestsError(ERROR_MESSAGES.AUTH.OTP_MAX_ATTEMPTS);
        }
      throw new BadRequestError(ERROR_MESSAGES.AUTH.INVALID_OTP);
    }

    this._isVerified = true;
    return true;
  }

  isExpired(): boolean {
    return new Date() > this._expiresAt;
  }

  canRetry(): boolean {
    return this._attempts < this._maxAttempts;
  }

  incrementAttempts(): void {
    this._attempts++;
  }

  get remainingTime(): number { return Math.max(0, this._expiresAt.getTime() - Date.now()) }
  get remainingAttempts(): number { return this._maxAttempts - this._attempts }
  get otp() { return this._otp.value }
  get attempts(): number { return this._attempts }
  get isVerified(): boolean { return this._isVerified }
  get expiresAt(): Date { return new Date(this._expiresAt) }
  get createdAt(): Date {return this._createdAt}
}
