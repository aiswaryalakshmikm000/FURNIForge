import { ValidationError } from "@domain/errors/AppError.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export class OTP {
  private readonly _value: string;

  constructor(value: string) {
    if (!/^\d{6}$/.test(value)) {
      throw new ValidationError(ERROR_MESSAGES.AUTH.INVALID_OTP);
    }

    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  equals(other: OTP): boolean{
    return this._value === other._value
  }
}