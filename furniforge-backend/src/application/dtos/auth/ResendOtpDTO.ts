import { z } from "zod";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages.js";

export const ResendOtpSchema = z.object({
  email: z
    .string()
    .email({ message: ERROR_MESSAGES.AUTH.INVALID_EMAIL })
    .transform((val) => val.trim().toLowerCase()),
});

export type ResendOtpDTO = z.infer<typeof ResendOtpSchema>;