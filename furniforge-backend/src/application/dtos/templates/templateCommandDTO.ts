import { z } from "zod";

export const TemplateCommandParamsSchema = z.object({
  id: z.string().uuid(),
});

export type TemplateCommandRequestDTO = z.infer<typeof TemplateCommandParamsSchema>;



export interface TemplateCommandResponseDTO {
  id: string;
}