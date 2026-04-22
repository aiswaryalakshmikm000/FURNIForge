import { z } from "zod";

export const AuthActionResponseDTOSchema = z.object({
  meta: z.object({
    tempUserId: z.string
  })
});

export type AuthActionResponseDTO = z.infer<typeof AuthActionResponseDTOSchema>;