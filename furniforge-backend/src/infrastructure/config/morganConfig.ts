import morgan from "morgan";
import { env } from "./env";
import { loggerInstance } from "../logger/WinstonLogger";

const morganFormat = env.NODE_ENV === "development" ? "dev" : "combined";

export const morganConfig = morgan(morganFormat, {
  stream: {
    write: (message: string) => {
      loggerInstance.info(message.trim());
    },
  },
});