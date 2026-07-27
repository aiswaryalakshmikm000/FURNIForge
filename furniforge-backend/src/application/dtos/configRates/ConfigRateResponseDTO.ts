import { ConfigCategory, ConfigUnit } from "../../../domain/enums/Config";

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
  createdAt: Date;
}