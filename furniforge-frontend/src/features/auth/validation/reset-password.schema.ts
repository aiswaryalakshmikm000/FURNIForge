import { z } from "zod";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, ERROR_MESSAGES.AUTH.PASSWORD_LENGTH)
    .regex(/[A-Z]/, "Must include uppercase")
    .regex(/[a-z]/, "Must include lowercase")
    .regex(/[0-9]/, "Must include number")
    .regex(/[\W]/, "Must include special char"),
  confirmPassword: z.string(),

}).refine((data) => data.password === data.confirmPassword, {
  message: ERROR_MESSAGES.AUTH.PASSWORD_MISMATCH,
  path: ["confirmPassword"],
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;