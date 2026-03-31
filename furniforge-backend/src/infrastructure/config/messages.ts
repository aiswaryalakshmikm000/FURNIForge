//========================SUCCESS MESSAGES=============================

export const SUCCESS_MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "Registration successful. Please check your email for verification code.",
  },

  GENERAL: {
    HEALTH_CHECK: 'Service is healthy.',
  },
};

//========================ERROR MESSAGES=============================

export const ERROR_MESSAGES = {
  GENERAL: {
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    INTERNAL_SERVER_ERROR: "Internal server error",
    BAD_REQUEST: "Bad request",
    VALIDATION_FAILED: 'Validation Failed',
    NOT_FOUND: "Resource not found",
    CONFLICT: "Conflict occurred",
    TOO_MANY_REQUESTS: "Too many requests",
    UNPROCESSABLE_ENTITY: "Unprocessable entity",
    EMAIL_SEND_FAILED: 'Failed to send email. Please try again.',
  },

  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password",
    INVALID_EMAIL: "Invalid email address",
    EMAIL_ALREADY_EXISTS: 'User with this email already exists',
    EMAIL_REQUIRED: 'Email is required',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
    PASSWORD_INVALID: "Password must contain uppercase, lowercase, number and min 6 chars"
  },

  USER: {
    NOT_FOUND: "User not found",
    ALREADY_EXISTS: "User with this email already exists",
  },
};