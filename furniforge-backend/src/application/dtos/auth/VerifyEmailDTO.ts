import { z } from "zod";

export const VerifyEmailRequestSchema = z.object({
  token: z.string().min(1),
});
export type VerifyEmailRequestDTO = z.infer<typeof VerifyEmailRequestSchema>;



export interface VerifyEmailResponseDTO {
  userId: string;
  email: string;
  verified: boolean;
  resetToken: string;
}