import z from "zod";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
export type ForgotPasswordDTO = z.infer<typeof ForgotPasswordSchema>;

export interface ForgotPasswordResponseDTO {
  meta: {
    email: string;
    cooldown: number;
  };
}

/**
 * verify reset otp request and response dto
 */

export const VerifyResetOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().regex(/^\d{6}$/),
});
export type VerifyResetOtpDTO = z.infer<typeof VerifyResetOtpSchema>;

export interface VerifyResetOtpResponseDTO {
  meta: {
    resetToken: string;
  };
}

/**
 * reset password request and response dto
 */

export const ResetPasswordSchema = z
  .object({
    resetToken: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.AUTH.PASSWORD_CONFLICT,
  });
export type ResetPasswordDTO = z.infer<typeof ResetPasswordSchema>;

/**
 * resend forgot password request and response dto
 */

export const ResendForgotPasswordOtpSchema = z.object({
  email: z.string().email(),
});
export type ResendForgotPasswordOtpDTO = z.infer<
  typeof ResendForgotPasswordOtpSchema
>;
