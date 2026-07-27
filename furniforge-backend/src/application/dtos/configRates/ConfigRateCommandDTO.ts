import { z } from "zod";

export const ConfigRateCommandParamsSchema = z.object({
  id: z.string().uuid(),
});

export type ConfigRateCommandRequestDTO = z.infer<typeof ConfigRateCommandParamsSchema>;



export interface ConfigRateCommandResponseDTO {
  id: string;
}