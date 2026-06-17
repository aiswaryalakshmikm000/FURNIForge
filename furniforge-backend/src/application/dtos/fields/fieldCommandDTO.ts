import z from "zod";

export const FieldCommandParamsSchema = z.object({
  id: z.string().uuid(),
});

export type FieldCommandRequestDTO = z.infer<typeof FieldCommandParamsSchema>;

export interface FieldCommandResponseDTO {
  id: string;
}