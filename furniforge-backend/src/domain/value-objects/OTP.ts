import { ValidationError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class OTP {
  private readonly value: string;

  constructor(value: string) {
    if (!/^\d{6}$/.test(value)) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.OTP_INVALID);
    }

    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}