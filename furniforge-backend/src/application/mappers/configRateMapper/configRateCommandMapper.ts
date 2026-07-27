import { ConfigRate } from "../../../domain/entities/ConfigRate";
import { ConfigRateCommandResponseDTO } from "../../dtos/configRates/ConfigRateCommandDTO";

export class ConfigRateCommandMapper {
  static toResponse(rate: ConfigRate): ConfigRateCommandResponseDTO {
    return {
      id: rate.id,
    };
  }
}
