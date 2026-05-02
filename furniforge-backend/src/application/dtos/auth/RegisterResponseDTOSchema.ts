import { z } from "zod";

export const RegisterResponseDTOSchema  = z.object({
  meta: z.object({
    tempUserId: z.string(),
    email: z.string(),
    cooldown: z.number(),
  })
});

export type RegisterResponseDTO = z.infer<typeof RegisterResponseDTOSchema>;