import { ConfigRateListItem } from "../../../domain/read-models/configRates/ConfigRateListItem";
import type { ConfigRateResponseDTO } from "../../dtos/configRates/ConfigRateResponseDTO";

export class ConfigRateMapper {
  static toResponse(rate: ConfigRateListItem): ConfigRateResponseDTO {
    return {
      id: rate.id,
      category: rate.category,
      itemName: rate.itemName,
      brand: rate.brand,
      rate: rate.rate,
      marginPercent: rate.marginPercent,
      finalRate: rate.finalRate,
      unit: rate.unit,
      isActive: rate.isActive,
      createdAt: rate.createdAt,
    };
  }
}
