export class OtpToken {
  private constructor(
    public otpId: string,
    public userId: string,
    public email: string,
    private _otp: string,
    private _attempts: number,
    private _maxAttempts: number,
    private _isVerified: boolean,
    private _expiresAt: number,
    private _createdAt: number,
  ) {}

  static create(userId: string, email: string, otp: string, ttlSeconds: number = 300) {
    const otpId = `otp_${Date.now()}_${Math.random()}`;

    return new OtpToken(
      otpId,
      userId,
      email,
      otp,
      0,
      3,
      false,
      Date.now() + ttlSeconds * 1000,
      Date.now(),
    );
  }

  static fromPersistence(raw: any): OtpToken {
  return new OtpToken(
      raw.otpId,
      raw.userId,
      raw.email,
      raw._otp,
      raw._attempts,
      raw._maxAttempts,
      raw._isVerified,
      raw._expiresAt,
      raw._createdAt
    );
  }

  verify(input: string) {
    if (this._isVerified) throw new Error("OTP already used");

    if (this.isExpired()) throw new Error("OTP expired");

    if (!this.canRetry()) throw new Error("Max attempts reached");

    if (this._otp !== input) {
      this._attempts++;
      throw new Error("Invalid OTP");
    }

    this._isVerified = true;
  }

  isExpired(): boolean {
    return Date.now() > this._expiresAt;
  }

  canRetry(): boolean {
    return this._attempts < this._maxAttempts;
  }

  get otp() {
    return this._otp;
  }

  incrementAttempts(): void {
    this._attempts++;
  }
}
