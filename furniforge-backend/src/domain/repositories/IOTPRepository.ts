import { OtpToken } from "@domain/entities/OtpToken.js";

export interface IOTPRepository {
  save(token: OtpToken, ttlSeconds: number): Promise<void>;
  get(email: string): Promise<OtpToken  | null>;
  delete(email: string): Promise<void>;
}