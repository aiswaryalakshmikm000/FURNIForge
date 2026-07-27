import { z } from "zod";
import { ConfigRateResponseDTO } from "./ConfigRateResponseDTO";

export const GetAllConfigRatesQuerySchema = z.object({
  search: z.string().optional(),
});

export type GetAllConfigRatesQueryDTO = z.infer<typeof GetAllConfigRatesQuerySchema>;

export interface GetAllConfigRatesResponseDTO {
  shutterFinishRates: ConfigRateResponseDTO[];
  cabinetMaterialRates: ConfigRateResponseDTO[];
  handleRates: ConfigRateResponseDTO[];
  hingeRates: ConfigRateResponseDTO[];
  accessoryRates: ConfigRateResponseDTO[];
}
