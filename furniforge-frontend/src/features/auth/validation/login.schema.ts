import { z } from "zod";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

export const loginSchema = z.object({
  email: z.string().email(ERROR_MESSAGES.AUTH.INVALID_EMAIL),
  password: z
    .string()
    .min(8, ERROR_MESSAGES.AUTH.PASSWORD_LENGTH)
    .regex(/[A-Z]/, "Must include uppercase")
    .regex(/[a-z]/, "Must include lowercase")
    .regex(/[0-9]/, "Must include number")
    .regex(/[\W]/, "Must include special char"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
