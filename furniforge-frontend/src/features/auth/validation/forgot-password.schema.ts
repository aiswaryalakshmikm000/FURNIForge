import { z } from "zod";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email(ERROR_MESSAGES.AUTH.INVALID_EMAIL),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;