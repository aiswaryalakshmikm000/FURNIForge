import { z } from "zod";

export const RegisterResponseDTOSchema  = z.object({
  meta: z.object({
    tempUserId: z.string()
  })
});

export type RegisterResponseDTO = z.infer<typeof RegisterResponseDTOSchema>;