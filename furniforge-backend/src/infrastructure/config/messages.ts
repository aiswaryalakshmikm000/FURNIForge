//========================SUCCESS MESSAGES=============================

export const SUCCESS_MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "Registration successful. Please check your email for verification code",

    VERIFY_EMAIL_SUCCESS: 'Email verified successfully',
    RESEND_OTP_SUCCESS: 'A new OTP has been sent to your email',
    OTP_SUCCESS: "OTP sent to email",
    VERIFY_OTP_SUCCESS: "OTP verified successfully",

    
    LOGOUT_SUCCESS: 'Logged out successfully',
    LOGIN_SUCCESS: "Login successful",
    
    TOKEN_REFRESH_SUCCESS: "Access token refreshed successfully",
    ME_FETCH: "User fetched successfully",
    FORGOT_PASSWORD: "If an account with this email exists, a reset OTP has been sent",
    PASSWORD_RESET_SUCCESS: "Password reset successful",
    GOOGLE_LOGIN_SUCCESS: "Google login successful",
  },

  GENERAL: {
    HEALTH_CHECK: 'Service is healthy',
  },

  ADMIN: {
    LEADS_FETCH_SUCCESS: "Leads fetched successfully",
    DESIGNER_ASSIGNED: "Designer assigned successfully",
    LEAD_CREATED: "Lead created successfully",
    DESIGNER_FETCH_SUCCESS: "Designers fetched successfully",
  }
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
    PASSWORD_MIN_LENGTH: "Password must be at least 8 characters",
    PASSWORD_INVALID: "Password must contain uppercase, lowercase, number and min 8 chars",

    PHONE_ALREADY_EXISTS: "User with this phone already exists",

    INVALID_OTP: 'Invalid OTP',
    OTP_ALREADY_SENT : "OTP already sent",
    OTP_NOT_FOUND: "OTP not found or invalid session",
    OTP_EXPIRED: "OTP expired",
    OTP_MAX_ATTEMPTS: 'Maximum verification attempts exceeded. Please request a new OTP',

    PENDING_USER_NOT_FOUND: 'No pending verification found. Please register again', 

    SESSION_INVALID: "Session invalid",
    SESSION_CONFLICT: "Session already used or rotated",
    SESSION_EXPIRED: "Session expired",
    SESSION_NOT_FOUND: "Session not found",

    INVALID_ROLE: "Invalid role",

    USER_INVALID: "User no longer valid",

    ACCOUNT_NOT_VERIFIED: "Please verify your account",

    OLD_PASSWORD: "Cannot reuse old password",
    PASSWORD_CONFLICT: "Passwords do not match",
    GOOGLE_ACCOUNT: "This account was registered using Google Sign In",
    RELOAD_USER_FAILED: "Failed to reload user",
    INVALID_GOOGLE_TOKEN: "Invalid google token",
    PASSWORD_NOT_SET: "No Password. This account uses Google Sign-In",

    TOKEN: {
      REFRESH_FAILED: "No refresh token",
      ACCESS_TOKEN_MISSING: "Access token missing",
      INVALID_ACCESS_TOKEN: "Invalid access token",
      INVALID_REFRESH_TOKEN: "Invalid refresh token",
      INVALID_RESET_TOKEN: "Invalid reset token",
      ACCESS_TOKEN_EXPIRED: "Access token expired",
      REFRESH_TOKEN_EXPIRED: "Refresh token expired",
    },
  },

  ADMIN: {
    LEAD_NOT_FOUND: "Lead not found",
    DESIGNER_NOT_FOUND: "Designer not found",
    DESIGNER_REG_NO_MISSING: "Designer registration number is missing",
  },

  USER: {
    NOT_FOUND: "User not found",
  },
};