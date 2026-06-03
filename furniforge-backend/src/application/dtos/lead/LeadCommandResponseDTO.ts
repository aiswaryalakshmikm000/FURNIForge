import z from "zod";

export const LeadCommandParamsSchema = z.object({
  id: z.string().uuid(),
});
export type LeadCommandRequestDTO = z.infer<typeof LeadCommandParamsSchema>;


export interface LeadCommandResponseDTO {
  id: string;
}