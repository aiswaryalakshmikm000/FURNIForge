import { z } from "zod";

export const UserResponseDTOSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  role: z.string(),
  isVerified: z.boolean(),
  isBlocked: z.boolean(),
  avatar: z.string().nullable().optional(),
  clientRegNo: z.string().nullable().optional(),
  designerRegNo: z.string().nullable().optional(),
});

export type UserResponseDTO = z.infer<typeof UserResponseDTOSchema>;
