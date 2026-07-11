import type { ConfigRate } from "../../../domain/entities/ConfigRate";
import type { ConfigRateResponseDTO } from "../../dtos/configRates/ConfigRateResponseDTO";

export class ConfigRateMapper {
  static toResponse(rate: ConfigRate): ConfigRateResponseDTO {
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
