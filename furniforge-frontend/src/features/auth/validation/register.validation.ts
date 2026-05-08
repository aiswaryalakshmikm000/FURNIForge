import { z } from "zod";
import { ERROR_MESSAGES } from "../../../core/config/constants/messages.constants";

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string(),
  email: z.string().email(ERROR_MESSAGES.AUTH.INVALID_EMAIL),
  phone: z.string().regex(/^\d{10}$/, ERROR_MESSAGES.AUTH.INVALID_PHONE),
  password: z
    .string()
    .min(8, ERROR_MESSAGES.AUTH.PASSWORD_LENGTH)
    .regex(/[A-Z]/, "Must include uppercase")
    .regex(/[a-z]/, "Must include lowercase")
    .regex(/[0-9]/, "Must include number")
    .regex(/[\W]/, "Must include special char"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

