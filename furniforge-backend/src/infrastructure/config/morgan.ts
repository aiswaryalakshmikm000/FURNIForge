import morgan from "morgan";
import { logger } from "@shared/utils/logger.js";
import { env } from "./env.js";

const morganFormat = env.NODE_ENV === "development" ? "dev" : "combined";

export const morganConfig = morgan(morganFormat, {
  stream: {
    write: (message: string) => {
      logger.info(message.trim());
    },
  },
});