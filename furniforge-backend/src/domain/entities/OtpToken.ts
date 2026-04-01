export class OtpToken {
  private constructor(
    public email: string,
    public otp: string,
    public attempts: number,
    public maxAttempts: number,
    public expiresAt: number
  ) {}

  static create(email: string, otp: string, ttlSeconds: number = 300) {
    return new OtpToken(
      email,
      otp,
      0,
      3,
      Date.now() + ttlSeconds * 1000
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