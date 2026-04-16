import morgan from "morgan";
import { env } from "./env.js";
import { loggerInstance } from "@infrastructure/logger/WinstonLogger.js";

const morganFormat = env.NODE_ENV === "development" ? "dev" : "combined";

export const morganConfig = morgan(morganFormat, {
  stream: {
    write: (message: string) => {
      loggerInstance.info(message.trim());
    },
  },
});