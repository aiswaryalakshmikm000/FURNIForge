import { ERROR_MESSAGES } from "../../infrastructure/config/messages.js";
import { HttpStatusCode } from "../../domain/enums/HttpStatusCode.js";

export class AppError extends Error {
  public statusCode: number;
  public code: string;
  public isOperational: boolean;
  public details?: any;
  public meta?: any;

  constructor(
    message: string,
    statusCode: number,
    code: string,
    details?: any,
    meta?: any,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    this.details = details;
    this.meta = meta;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.BAD_REQUEST, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.BAD_REQUEST, "BAD_REQUEST_ERROR", details, meta);
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.VALIDATION_FAILED, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.BAD_REQUEST,"VALIDATION_ERROR", details ,meta);
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNAUTHORIZED, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.UNAUTHORIZED, "UNAUTHORIZED_ERROR", details ,meta);
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.FORBIDDEN, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.FORBIDDEN, "FORBIDDEN_ERROR", details, meta);
  }
}

export class NotFoundError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.NOT_FOUND, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.NOT_FOUND, "NOT_FOUND_ERROR", details, meta);
  }
}

export class ConflictError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.CONFLICT, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.CONFLICT, "CONFLICT_ERROR", details, meta);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNPROCESSABLE_ENTITY, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.UNPROCESSABLE_ENTITY, "UNPROCESSABLE_ENTITY_ERROR",details, meta);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.TOO_MANY_REQUESTS, details?: any, meta?: any,
  ) {
    super(message, HttpStatusCode.TOO_MANY_REQUESTS, "TOO_MANY_REQUESTS_ERROR", details, meta);
  }
}

export class InternalServerError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR, details?: any,meta?: any,
  ) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, "INTERNAL_SERVER_ERROR", details, meta);
  }
}