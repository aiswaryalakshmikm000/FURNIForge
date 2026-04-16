import { IOTPRepository } from "@domain/repositories/IOTPRepository.js";
import { OtpToken } from "@domain/entities/OtpToken.js";
import { inject, injectable } from "inversify";
import { TYPES } from "@infrastructure/di/types.js";
import type { Redis } from "ioredis";

@injectable()
export class RedisOTPRepository implements IOTPRepository {
  constructor(
    @inject(TYPES.Redis) private redis: Redis
  ){}

  async save(token: OtpToken, ttlSeconds: number): Promise<void> {
    const pipeline = this.redis.pipeline();

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
    const otpId = await this.redis.get(`otp:user:${userId}`);
    if (!otpId) return null;

    const data = await this.redis.get(`otp:${otpId}`);
    if (!data) return null;

    return OtpToken.fromPersistence(JSON.parse(data))
  }

  async getByCode(otp: string, email: string): Promise<OtpToken | null> {
    const otpId = await this.redis.get(`otp:code:${email}:${otp}`);
    if (!otpId) return null;

    const data = await this.redis.get(`otp:${otpId}`);
    if (!data) return null;

    return OtpToken.fromPersistence(JSON.parse(data));
  } 

  async update(token: OtpToken): Promise<void> {
    const ttl = await this.redis.ttl(`otp:${token.otpId}`);
    if (ttl <= 0) return;

    const data = JSON.stringify(token);

    const pipeline = this.redis.pipeline();

    pipeline.setex(`otp:${token.otpId}`, ttl, data);
    pipeline.setex(`otp:user:${token.userId}`, ttl, token.otpId);
    pipeline.setex(`otp:code:${token.email}:${token.otp}`, ttl, token.otpId);

    await pipeline.exec();
  }

  async delete(token: OtpToken): Promise<void> {
    const pipeline = this.redis.pipeline();

    pipeline.del(`otp:${token.otpId}`);
    pipeline.del(`otp:user:${token.userId}`);
    pipeline.del(`otp:code:${token.email}:${token.otp}`);

    await pipeline.exec();
  }
}