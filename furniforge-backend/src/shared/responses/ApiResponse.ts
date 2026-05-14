interface ErrorResponse {
  code: string;
  details?: unknown;
}

export class ResponseBuilder<T> {
  private success: boolean;
  private message: string;
  private data?: T;
  private error?: ErrorResponse;

  private constructor(
    success: boolean,
    message: string,
    data?: T,
    error?: ErrorResponse,
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  static success<T>(data: T, message = "Success") {
    return new ResponseBuilder<T>(true, message, data);
  }

  static created<T>(data: T, message = "Resource created") {
    return new ResponseBuilder<T>(true, message, data);
  }

  static error(
    message = "Error",
    code = "ERROR",
    details?: unknown,
  ) {
    return new ResponseBuilder<null>(
      false,
      message,
      undefined,
      {
        code,
        details,
      }
    );
  }

  build() {
    return {
      success: this.success,
      message: this.message,
      data: this.data ?? null,
      error: this.error ?? null,
    };
  }
}