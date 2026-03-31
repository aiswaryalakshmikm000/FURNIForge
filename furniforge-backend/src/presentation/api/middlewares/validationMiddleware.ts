import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.issues.map(e => ({
    field: e.path.join("."),
    message: e.message
  }));
      return next(new ValidationError(ERROR_MESSAGES.GENERAL.VALIDATION_FAILED, errors));
    }

    req.body = result.data;
    next();
  };
};