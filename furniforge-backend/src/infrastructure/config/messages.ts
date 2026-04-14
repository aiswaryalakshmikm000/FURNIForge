//========================SUCCESS MESSAGES=============================

export const SUCCESS_MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "Registration successful. Please check your email for verification code",

    VERIFY_OTP_SUCCESS: 'Email verified successfully',
    RESEND_OTP_SUCCESS: 'A new verification code has been sent to your email',
    OTP_SUCCESS: "OTP sent successfully",
    
    LOGOUT_SUCCESS: 'Logged out successfully',
    LOGIN_SUCCESS: "Login successful",
    
    TOKEN_REFRESH_SUCCESS: "Access token refreshed successfully",
  },

  GENERAL: {
    HEALTH_CHECK: 'Service is healthy',
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
    TOO_MANY_REQUESTS: "Too many requests, please try again later",
    UNPROCESSABLE_ENTITY: "Unprocessable entity",
    EMAIL_SEND_FAILED: 'Failed to send email. Please try again',
  },

  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password",
    INVALID_EMAIL: "Invalid email address",
    EMAIL_ALREADY_EXISTS: 'User with this email already exists',
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_ALREADY_VERIFIED: "Email already verified",

    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
    PASSWORD_INVALID: "Password must contain uppercase, lowercase, number and min 6 chars",

    PHONE_ALREADY_EXISTS: "User with this phone already exists",

    INVALID_OTP: 'Invalid OTP',
    OTP_ALREADY_SENT : "OTP already sent",
    OTP_NOT_FOUND: "OTP not found or invalid session",
    OTP_EXPIRED: "OTP expired",
    OTP_MAX_ATTEMPTS: 'Maximum verification attempts exceeded. Please request a new OTP',

    PENDING_USER_NOT_FOUND: 'No pending verification found. Please register again', 

    SESSION_INVALID: "Session mismatch",
    SESSION_CONFLICT: "Session already used or rotated",
    SESSION_EXPIRED: "Session expired",
    SESSION_NOT_FOUND: "Session not found",

    USER_INVALID: "User no longer valid",

    ACCOUNT_NOT_VERIFIED: "Please verify your account",

    TOKEN: {
      REFRESH_FAILED: "No refresh token"
    }
  },

  USER: {
    NOT_FOUND: "User not found",
  },
};