import { ConfigCategory, ConfigUnit } from "../enums/Config";

export interface IConfigRatePersistence {
  id: string;
  category: ConfigCategory;
  itemName: string;
  brand: string;
  rate: number;
  marginPercent: number;
  finalRate: number;
  unit: ConfigUnit;
  isActive: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
