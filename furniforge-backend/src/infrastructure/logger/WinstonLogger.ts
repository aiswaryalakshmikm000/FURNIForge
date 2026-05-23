import winston from "winston";
import "winston-daily-rotate-file";
import type { ILogger } from "../../domain/services/ILogger";
import { env } from "../../infrastructure/config/env";

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const transportConsole = new winston.transports.Console({
  format: combine(colorize(), timestamp(), logFormat),
});

const transportFile = new winston.transports.DailyRotateFile({
  filename: "logs/%DATE%-app.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: env.LOG_MAX_FILES,
  format: combine(timestamp(), logFormat),
});

export class WinstonLogger implements ILogger {
  private _logger = winston.createLogger({
    level: env.NODE_ENV === "development" ? "debug" : "info",
    transports: [transportConsole, transportFile],
  });

  info(message: string, meta?: Record<string, unknown>): void {
    this._logger.info(message, meta);
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this._logger.error(message, meta);
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this._logger.warn(message, meta);
  }

  debug(message: string, meta?: Record<string, unknown>): void {
    this._logger.debug(message, meta);
  }
}

export const loggerInstance = new WinstonLogger();