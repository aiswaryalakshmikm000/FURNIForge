import { z } from "zod";

export const UserResponseDTOSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  role: z.string(),
  isVerified: z.boolean(),
});

export type UserResponseDTO = z.infer<typeof UserResponseDTOSchema>;