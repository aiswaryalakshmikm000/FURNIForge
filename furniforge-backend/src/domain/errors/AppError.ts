import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";
import { HttpStatusCode } from "@domain/enums/HttpStatusCode.js";

export class AppError extends Error {
  public statusCode: number;
  public code: string;
  public isOperational: boolean;
  public details?: any;

  constructor(
    message: string,
    statusCode: number,
    code: string,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.BAD_REQUEST, details?: any
  ) {
    super(message, HttpStatusCode.BAD_REQUEST, "BAD_REQUEST_ERROR", details);
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.VALIDATION_FAILED, details?: any
  ) {
    super(message, HttpStatusCode.BAD_REQUEST,"VALIDATION_ERROR", details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNAUTHORIZED, details?: any
  ) {
    super(message, HttpStatusCode.UNAUTHORIZED, "UNAUTHORIZED_ERROR", details);
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.FORBIDDEN, details?: any
  ) {
    super(message, HttpStatusCode.FORBIDDEN, "FORBIDDEN_ERROR", details);
  }
}

export class NotFoundError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.NOT_FOUND, details?: any
  ) {
    super(message, HttpStatusCode.NOT_FOUND, "NOT_FOUND_ERROR", details);
  }
}

export class ConflictError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.CONFLICT, details?: any
  ) {
    super(message, HttpStatusCode.CONFLICT, "CONFLICT_ERROR", details);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNPROCESSABLE_ENTITY, details?: any
  ) {
    super(message, HttpStatusCode.UNPROCESSABLE_ENTITY, "UNPROCESSABLE_ENITY_ERROR",details);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.TOO_MANY_REQUESTS, details?: any
  ) {
    super(message, HttpStatusCode.TOO_MANY_REQUESTS, "TOO_MANY_REQUESTS_ERROR", details);
  }
}

export class InternalServerError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR, details?: any
  ) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, "INTERNAL_SERVER_ERROR", details);
  }
}