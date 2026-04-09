import winston from "winston";
import "winston-daily-rotate-file";
import { env } from "@infrastructure/config/env.js";

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
  maxFiles: "14d",
  format: combine(timestamp(), logFormat),
});

export const logger = winston.createLogger({
  level: env.NODE_ENV === "development" ? "debug" : "info",
  transports: [transportConsole, transportFile],
});