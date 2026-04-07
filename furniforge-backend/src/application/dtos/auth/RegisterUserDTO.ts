import { z } from "zod";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must not exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "First name can only contain letters and spaces",
    })
    .trim(),
  lastName: z
    .string()
    .max(50, { message: "Last name must not exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Last name can only contain letters and spaces",
    })
    .transform((val) => val.trim())
    .optional()
    .default(""),
  email: z
    .string()
    .email({ message: ERROR_MESSAGES.AUTH.INVALID_EMAIL })
    .transform((val) => val.trim().toLowerCase()),
  phone: z
  .string()
  .min(10)
  .regex(/^[0-9]{10}$/, "Invalid phone number"),
  password: z
    .string()
    .min(6, { message: ERROR_MESSAGES.AUTH.PASSWORD_MIN_LENGTH })
});

export type RegisterUserDTO = z.infer<typeof RegisterSchema>;
