export interface ForgotPasswordRequestDTO {
  email: string;
}

export interface ForgotPasswordResponseDTO {
  meta: {
    email: string;
    cooldown: number;
  };
}

/**
 * verify request and response dto
 */

export interface VerifyResetOtpRequestDTO  {
  email: string;
  otp: string;
}

export interface VerifyResetOtpResponseDTO {
  meta: {
    resetToken: string;
  }
}

/**
 * reset password request dto
 */

export interface ResetPasswordRequestDTO {
  resetToken: string;
  password: string;
  confirmPassword: string;
}

/**
 * resend forgot password otp dto
 */

export interface ResendForgotPasswordOtpRequestDTO {
  email: string;
}