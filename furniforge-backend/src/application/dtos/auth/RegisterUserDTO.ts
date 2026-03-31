import { z } from "zod";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must not exceed 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "First name can only contain letters and spaces",
    }),
  lastName: z
    .string()
    .max(50, { message: "Last name must not exceed 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Last name can only contain letters and spaces",
    }),
  email: z
    .string()
    .email({ message: ERROR_MESSAGES.AUTH.INVALID_EMAIL })
    .min(1, { message: ERROR_MESSAGES.AUTH.EMAIL_REQUIRED })
    .toLowerCase()
    .trim(),
  phone: z.string().min(10).regex(/^[0-9]{10}$/, "Invalid phone number"),
  password: z
    .string()
    .min(1, { message: ERROR_MESSAGES.AUTH.PASSWORD_REQUIRED })
    .min(6, { message: ERROR_MESSAGES.AUTH.PASSWORD_MIN_LENGTH })
    .regex(/[A-Z]/, {message: ERROR_MESSAGES.AUTH.PASSWORD_INVALID})
    .regex(/[a-z]/, {message: ERROR_MESSAGES.AUTH.PASSWORD_INVALID})
    .regex(/[0-9]/, {message: ERROR_MESSAGES.AUTH.PASSWORD_INVALID}),
});

export type RegisterUserDTO = z.infer<typeof RegisterSchema>;
