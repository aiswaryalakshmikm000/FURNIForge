import { z } from "zod";

export const AuthActionResponseDTOSchema = z.object({
  message: z.string(),
  meta: z.record(z.string(), z.any()).optional()
});

export type AuthActionResponseDTO = z.infer<typeof AuthActionResponseDTOSchema>;