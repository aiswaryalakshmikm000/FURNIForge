import rateLimit from "express-rate-limit";
import { redisInstance } from "@infrastructure/redis/RedisClient.js";
import { env } from "@infrastructure/config/env.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

const redis = redisInstance;

const createRedisStore = (prefix: string, windowMs: number) => ({
  async increment(key: string) {
    const redisKey = `${prefix}:${key}`;
    const count = await redis.incr(redisKey);

    if (count === 1) {
      await redis.expire(redisKey, Math.ceil(windowMs / 1000));
    }

    return {
      totalHits: count,
      resetTime: new Date(Date.now() + windowMs),
    };
  },

  async decrement(key: string) {
    await redis.decr(`${prefix}:${key}`);
  },

  async resetKey(key: string) {
    await redis.del(`${prefix}:${key}`);
  },
});


export const generalLimiter = rateLimit({
  windowMs: env.RATE_LIMIT.WINDOW_MS,
  max: env.RATE_LIMIT.MAX,
  message: ERROR_MESSAGES.GENERAL.TOO_MANY_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  store: createRedisStore("rl:gen", env.RATE_LIMIT.WINDOW_MS)
});

export const authLimiter = rateLimit({
  windowMs: env.AUTH_RATE_LIMIT.WINDOW_MS,
  max: env.AUTH_RATE_LIMIT.MAX,
  message: "Too many login attempts",
  skipSuccessfulRequests: true,
  store: createRedisStore("rl:auth", env.AUTH_RATE_LIMIT.WINDOW_MS)
});

export const otpLimiter = rateLimit({
  windowMs: env.OTP_RATE_LIMIT.WINDOW_MS,
  max: env.OTP_RATE_LIMIT.MAX,
  message: "Too many OTP requests",
  store: createRedisStore("rl:otp", env.OTP_RATE_LIMIT.WINDOW_MS)
});