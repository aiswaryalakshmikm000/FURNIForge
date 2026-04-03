import { OtpToken } from "@domain/entities/OtpToken.js";

export interface IOTPRepository {
  save(token: OtpToken, ttlSeconds: number): Promise<void>;
  getByUserId(userId: string): Promise<OtpToken  | null>;
  getByCode(otp: string, email: string): Promise <OtpToken | null>;
  delete(token: OtpToken): Promise<void>;
}