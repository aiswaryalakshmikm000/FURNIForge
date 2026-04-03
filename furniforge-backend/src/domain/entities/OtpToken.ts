export class OtpToken {
  private constructor(
    public otpId: string,
    public userId: string,
    public email: string,
    public otp: string,
    public attempts: number,
    public maxAttempts: number,
    public isVerified: boolean,
    public expiresAt: number,
    public createdAt: number,
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

  static fromPersistence(data: any): OtpToken {
    return new OtpToken(
      data.otpId,
      data.userId,
      data.email,
      data.otp,
      data.attempts,
      data.maxAttempts,
      data.isVerified,
      data.expiresAt,
      data.createdAt,
    );
  }

  isExpired(): boolean {
    return Date.now() > this.expiresAt;
  }

  canRetry(): boolean {
    return this.attempts < this.maxAttempts;
  }

  incrementAttempts(): void {
    this.attempts++;
  }
}
