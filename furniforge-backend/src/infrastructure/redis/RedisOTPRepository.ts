import RedisClient from "./RedisClient.js";
import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { OtpToken } from "@domain/entities/OtpToken.js";

export class RedisOTPRepository implements IOTPRepository {
  private client = RedisClient.getInstance();

  async save(token: OtpToken, ttlSeconds: number): Promise<void> {
    const pipeline = this.client.pipeline();

    const otpKey = `otp:${token.otpId}`;
    const userKey = `otp:user:${token.userId}`;
    const codeKey = `otp:code:${token.email}:${token.otp}`;
    const data = JSON.stringify(token);

    pipeline.setex(otpKey, ttlSeconds, data) //store full otp object
    pipeline.setex(userKey, ttlSeconds, token.otpId) //map user to otpId
    pipeline.setex(codeKey, ttlSeconds, token.otpId) //map code to otpId

    await pipeline.exec()
  }

  async getByUserId(userId: string): Promise<OtpToken | null> {
  const otpId = await this.client.get(`otp:user:${userId}`);
  if (!otpId) return null;

  const data = await this.client.get(`otp:${otpId}`);
  if (!data) return null;

  const parsed = JSON.parse(data);

  return OtpToken.fromPersistence(parsed)
}

  async getByCode(otp: string, email: string): Promise<OtpToken | null> {
  const otpId = await this.client.get(`otp:code:${email}:${otp}`);
  if (!otpId) return null;

  const data = await this.client.get(`otp:${otpId}`);
  if (!data) return null;

  return OtpToken.fromPersistence(JSON.parse(data));
}

  async update(token: OtpToken): Promise<void> {
  const ttl = await this.client.ttl(`otp:${token.otpId}`);
  if (ttl <= 0) return;

  const data = JSON.stringify(token);

  const pipeline = this.client.pipeline();

  pipeline.setex(`otp:${token.otpId}`, ttl, data);
  pipeline.setex(`otp:user:${token.userId}`, ttl, token.otpId);
  pipeline.setex(`otp:code:${token.email}:${token.otp}`, ttl, token.otpId);

  await pipeline.exec();
}

  async delete(token: OtpToken): Promise<void> {
    const pipeline = this.client.pipeline();

    pipeline.del(`otp:${token.otpId}`);
    pipeline.del(`otp:user:${token.userId}`);
    pipeline.del(`otp:code:${token.email}:${token.otp}`);

    await pipeline.exec();
  }
}