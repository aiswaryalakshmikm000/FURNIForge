import { ConfigCategory, ConfigUnit } from "../../enums/Config";

export interface ConfigRateListItem {
    id: string;
    category: ConfigCategory;
    itemName: string;
    brand: string;
    rate: number;
    marginPercent: number;
    finalRate: number;
    unit: ConfigUnit;
    isActive: boolean;
    deletedAt: Date | null
    createdAt: Date;
}