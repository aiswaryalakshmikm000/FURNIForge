import { z } from "zod";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";

export const VerifyOtpSchema = z.object({
  tempUserId: z.string(),
  otp: z
  .string()
  .regex(/^\d{6}$/, { message: ERROR_MESSAGES.AUTH.INVALID_OTP })
  .trim(),
});

export type VerifyOtpDTO = z.infer<typeof VerifyOtpSchema>;
