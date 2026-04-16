// import { Redis } from "ioredis";
// import { loggerInstance } from "@infrastructure/logger/WinstonLogger.js";

// class RedisClient {
//   private static instance: Redis;

//   static getInstance(): Redis {
//     if (!this.instance) {
//       this.instance = new Redis({
//         host: "127.0.0.1",
//         port: 6379,
//       });

//       this.instance.on("connect", () => {
//         loggerInstance.info("✅ Redis connected successfully");
//       });

//       this.instance.on("error", (err: Error) => {
//         loggerInstance.error("❌ Redis connection  error:", {error: err});
//       });
//     }

//     return this.instance;
//   }
// }

// export default RedisClient;

import { Redis} from "ioredis";
import { loggerInstance } from "@infrastructure/logger/WinstonLogger.js";

export const redisInstance = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

redisInstance.on("connect", () => {
  loggerInstance.info("✅ Redis connected");
});

redisInstance.on("ready", () => {
  loggerInstance.info("🚀 Redis ready");
});

redisInstance.on("error", (err: Error) => {
  loggerInstance.error("❌ Redis error", { err });
});

redisInstance.on("close", () => {
  loggerInstance.warn("⚠️ Redis connection closed");
});