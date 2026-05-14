import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../domain/errors/AppError';
import { ERROR_MESSAGES } from '../../../infrastructure/config/messages';
import { loggerInstance } from '../../../infrastructure/logger/WinstonLogger';

export const errorHandlerMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: {
        code: err.code,
        details: err.details ?? null,
      },
      meta: err.meta || null
    });
  }

  if (err instanceof Error) {
    loggerInstance.error("Unhandled Error", {message: err.message, stack: err.stack, path: req.path, method: req.method});
  } else {
    loggerInstance.error("Unknown thrown value:", {err});
  }

  return res.status(500).json({
    success: false,
    message: ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      details: null,
    },
    meta: null
  });
};