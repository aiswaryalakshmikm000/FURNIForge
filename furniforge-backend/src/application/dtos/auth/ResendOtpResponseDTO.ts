import z from "zod";

export const ResendOtpResponseDTOSchema = z.object({
  meta: z.object({
    email: z.string(),
    cooldown: z.number()
  })
});

export type ResendOtpResponseDTO = z.infer<typeof ResendOtpResponseDTOSchema>;