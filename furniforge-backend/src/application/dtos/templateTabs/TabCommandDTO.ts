import { z } from "zod";

export const TabCommandParamsSchema = z.object({
  id: z.string().uuid(),
});

export type TabCommandRequestDTO = z.infer<typeof TabCommandParamsSchema>;

export interface TabCommandResponseDTO {
  id: string;
}