import { z } from "zod";

export const GoogleAuthSchema = z.object({
  token: z.string().min(1),
});

export type GoogleAuthDTO = z.infer<typeof GoogleAuthSchema>;
