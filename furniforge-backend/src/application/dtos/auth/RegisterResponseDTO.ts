import { z } from "zod";

export const RegisterResponseDTOSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  LastName: z.string(),
  email: z.string().email(),
});

export type RegisterResponseDTO = z.infer<typeof RegisterResponseDTOSchema>;