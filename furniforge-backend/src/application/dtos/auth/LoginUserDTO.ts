import { z } from "zod";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: ERROR_MESSAGES.AUTH.INVALID_EMAIL })
    .transform((val) => val.trim().toLowerCase()),
  password: z
    .string()
    .min(1, { message: ERROR_MESSAGES.AUTH.PASSWORD_REQUIRED }),
});

export type LoginDTO = z.infer<typeof LoginSchema>;
