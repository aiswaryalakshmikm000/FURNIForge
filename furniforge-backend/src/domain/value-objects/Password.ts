import { ValidationError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class Password {
  private readonly _value: string;

  constructor(value: string) {

    if (!value) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.PASSWORD_REQUIRED);
    }
    
    if (!this.isValid(value)) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.PASSWORD_INVALID);
    }

    this._value = value;
  }

  private isValid(password: string): boolean {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[\W]/.test(password)
    );
  }

  get value(): string {
    return this._value;
  }
}