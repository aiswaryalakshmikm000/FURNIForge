import z from "zod";

export const DesignerCommandParamsSchema = z.object({
  id: z.string().uuid(),
});
export type DesignerCommandRequestDTO = z.infer<typeof DesignerCommandParamsSchema>;

export interface DesignerCommandResponseDTO {
  id: string;
}
