import type { ConfigCategory, ConfigUnit } from "../../../types/enums/config-type.enum";

export interface GetAllConfigRatesRequestDTO {
  search?: string;
}

export interface ConfigRateResponseDTO {
  id: string;
  category: ConfigCategory;
  itemName: string;
  brand: string;
  rate: number;
  marginPercent: number;
  finalRate: number;
  unit: ConfigUnit;
  isActive: boolean;
  deletedAt: Date;
  createdAt: string;
}

export interface GetAllConfigRatesResponseDTO {
  shutterFinishRates: ConfigRateResponseDTO[];
  cabinetMaterialRates: ConfigRateResponseDTO[];
  handleRates: ConfigRateResponseDTO[];
  hingeRates: ConfigRateResponseDTO[];
  accessoryRates: ConfigRateResponseDTO[];
}