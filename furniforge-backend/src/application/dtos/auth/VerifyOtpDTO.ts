import { z } from "zod";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export const VerifyOtpSchema = z.object({
  email: z
    .string()
    .email({ message: ERROR_MESSAGES.AUTH.INVALID_EMAIL })
    .transform((val) => val.trim().toLowerCase()),
  otp: z
  .string()
  .regex(/^\d{6}$/, { message: ERROR_MESSAGES.AUTH.INVALID_OTP })
  .trim(),
});

export type VerifyOtpDTO = z.infer<typeof VerifyOtpSchema>;
