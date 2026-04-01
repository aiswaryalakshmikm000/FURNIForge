import RedisClient from "./RedisClient.js";
import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { OtpToken } from "@domain/entities/OtpToken.js";

export class RedisOTPRepository implements IOTPRepository {
  private client = RedisClient.getInstance();

  private getKey(email: string) {
    return `otp:${email}`;
  }

  async save(token: OtpToken, ttlSeconds: number): Promise<void> {
    await this.client.setex(
      this.getKey(token.email),
      ttlSeconds,
      JSON.stringify(token)
    );
  }

  async get(email: string): Promise<OtpToken | null> {
    const data = await this.client.get(this.getKey(email));
    return data ? OtpToken.create(JSON.parse(data).email, JSON.parse(data).otp) : null;
  }

  async delete(email: string): Promise<void> {
    await this.client.del(this.getKey(email));
  }
}