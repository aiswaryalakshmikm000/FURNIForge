import { z } from "zod";

export const ResendOtpSchema = z.object({
  tempUserId: z.string(),
});

export type ResendOtpDTO = z.infer<typeof ResendOtpSchema>;
