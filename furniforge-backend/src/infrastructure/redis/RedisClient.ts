import { Redis } from "ioredis";
import { logger } from "@shared/utils/logger.js";

class RedisClient {
  private static instance: Redis;

  static getInstance(): Redis {
    if (!this.instance) {
      this.instance = new Redis({
        host: "127.0.0.1",
        port: 6379,
      });

      this.instance.on("connect", () => {
        logger.info("✅ Redis connected successfully");
      });

      this.instance.on("error", (err: Error) => {
        logger.error("❌ Redis connection  error:", {error: err});
      });
    }

    return this.instance;
  }
}

export default RedisClient;