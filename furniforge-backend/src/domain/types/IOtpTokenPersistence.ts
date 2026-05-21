export interface IOtpTokenPersistence {
  otpId: string;
  userId: string;
  email: string;
  otp: string;
  attempts: number;
  maxAttempts: number;
  isVerified: boolean;
  expiresAt: Date | string;
  createdAt: Date | string;
}