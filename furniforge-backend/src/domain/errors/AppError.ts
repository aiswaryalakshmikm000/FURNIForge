import { ERROR_MESSAGES } from "../../infrastructure/config/messages";
import { HttpStatusCode } from "../../domain/enums/HttpStatusCode";
import { ERROR_CODES } from "../../shared/constants/errorCodes";

export class AppError extends Error {
  public statusCode: number;
  public code: string;
  public isOperational: boolean;
  public details?: unknown;
  public meta?: unknown;

  constructor(
    message: string,
    statusCode: number,
    code: string,
    details?: unknown,
    meta?: unknown,
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
    message: string = ERROR_MESSAGES.GENERAL.BAD_REQUEST, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.BAD_REQUEST, ERROR_CODES.GENERAL.BAD_REQUEST, details, meta);
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.VALIDATION_FAILED, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.BAD_REQUEST, ERROR_CODES.GENERAL.VALIDATION_ERROR, details ,meta);
  }
}

export class UnauthorizedError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNAUTHORIZED, code: string = ERROR_CODES.GENERAL.UNAUTHORIZED, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.UNAUTHORIZED, code, details ,meta);
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.FORBIDDEN, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.FORBIDDEN, ERROR_CODES.GENERAL.FORBIDDEN, details, meta);
  }
}

export class NotFoundError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.NOT_FOUND, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.NOT_FOUND, ERROR_CODES.GENERAL.NOT_FOUND, details, meta);
  }
}

export class ConflictError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.CONFLICT, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.CONFLICT, ERROR_CODES.GENERAL.CONFLICT, details, meta);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.UNPROCESSABLE_ENTITY, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.UNPROCESSABLE_ENTITY, ERROR_CODES.GENERAL.UNPROCESSABLE_ENTITY, details, meta);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.TOO_MANY_REQUESTS, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.TOO_MANY_REQUESTS, ERROR_CODES.GENERAL.TOO_MANY_REQUESTS, details, meta);
  }
}

export class InternalServerError extends AppError {
  constructor(
    message: string = ERROR_MESSAGES.GENERAL.INTERNAL_SERVER_ERROR, details?: unknown, meta?: unknown,
  ) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR, ERROR_CODES.GENERAL.INTERNAL_SERVER_ERROR, details, meta);
  }
}