import { Request, Response, NextFunction } from 'express';
import { AppError } from '@domain/errors/AppError.js';
import { ERROR_MESSAGES } from '@infrastructure/config/messages.js';

export const errorHandlerMiddleware = (
  err: Error,
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
    });
  }

  console.error("Unhandled Error:", err);

  return res.status(500).json({
    success: false,
    message: ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      details: null,
    },
  });
};