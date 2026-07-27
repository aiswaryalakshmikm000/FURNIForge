import { ConfigRateCommandRequestDTO, ConfigRateCommandResponseDTO } from "../../../dtos/configRates/ConfigRateCommandDTO";
import { UpdateConfigRateDTO } from "../../../dtos/configRates/UpdateConfigRateDTO";

export interface IUpdateConfigRateUseCase {
  execute( params: ConfigRateCommandRequestDTO, dto: UpdateConfigRateDTO): Promise<ConfigRateCommandResponseDTO>;
}
