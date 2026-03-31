import { ValidationError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class Email {
  private readonly _value: string;

  constructor(value: string) {
    const normalized = value.toLowerCase().trim();

    if (!normalized) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.EMAIL_REQUIRED);
    }

    if (!this.isValid(normalized)) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.INVALID_CREDENTIALS);
    }

    this._value = normalized;
  }

  private isValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  get value(): string {
    return this._value;
  }

  equals(other: Email): boolean {
    return this._value === other._value;
  }
}