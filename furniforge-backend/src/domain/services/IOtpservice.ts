import { OtpToken } from "@domain/entities/OtpToken.js";

export interface IOtpService {
  generateOTP(): string;
  generateAndHandleOtp(userId: string, email: string): Promise<OtpToken>;
  verifyOtp(userId: string, email: string, inputOtp: string): Promise<OtpToken>;
}