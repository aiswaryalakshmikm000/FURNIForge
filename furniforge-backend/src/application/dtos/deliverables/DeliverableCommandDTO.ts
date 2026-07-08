import { z } from "zod";

export const DeliverableCommandParamsSchema = z.object({
  id: z.string().uuid(),
});

export type DeliverableCommandRequestDTO = z.infer<typeof DeliverableCommandParamsSchema>;



export interface DeliverableCommandResponseDTO {
  id: string;
}