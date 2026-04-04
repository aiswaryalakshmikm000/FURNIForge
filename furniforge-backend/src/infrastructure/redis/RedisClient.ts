import { Redis } from "ioredis";

class RedisClient {
  private static instance: Redis;

  static getInstance(): Redis {
    if (!this.instance) {
      this.instance = new Redis({
        host: "127.0.0.1",
        port: 6379,
      });

      this.instance.on("connect", () => {
        console.log("✅ Redis connected");
      });

      this.instance.on("error", (err: Error) => {
        console.error("❌ Redis error:", err);
      });
    }

    return this.instance;
  }
}

export default RedisClient;