import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../../../domain/errors/AppError.js";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        const errors = result.error.issues.map(e => ({
    field: e.path.join("."),
    message: e.message
  }));
    console.log(errors)
    return next(new ValidationError(ERROR_MESSAGES.GENERAL.VALIDATION_FAILED, { fields: errors }));
  }

    req.body = result.data;
    next();
  };
};


export const validateQuery = (schema: ZodSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      const errors = result.error.issues.map(e => ({
        field: e.path.join("."),
        message: e.message
      }));

      return next(
        new ValidationError(
          ERROR_MESSAGES.GENERAL.VALIDATION_FAILED,
          errors
        )
      );
    }

    req.query = result.data as any;
    next();
  };
};


export const validateParams = (schema: ZodSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      const errors = result.error.issues.map(e => ({
        field: e.path.join("."),
        message: e.message
      }));

      return next(
        new ValidationError(
          ERROR_MESSAGES.GENERAL.VALIDATION_FAILED,
          errors
        )
      );
    }

    req.params = result.data as any;
    next();
  };
};