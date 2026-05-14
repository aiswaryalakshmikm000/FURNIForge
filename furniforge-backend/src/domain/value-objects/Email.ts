import { ValidationError } from "../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../infrastructure/config/messages";

export class Email {
  private readonly _value: string;

  constructor(value: string) {
    const normalized = value.trim().toLowerCase();

    if (!normalized) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.EMAIL_REQUIRED);
    }

    if (!this.isValid(normalized)) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.INVALID_EMAIL);
    }

    this._value = normalized;
  }

  private isValid(email: string): boolean {
    const basic = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // const domain = email.split("@")[1];
    return basic
    // return basic && domain === "gmail.com";
  }

  get value(): string {
    return this._value;
  }

  equals(other: Email): boolean {
    return this._value === other._value;
  }
}