import { ConfigRateCommandRequestDTO, ConfigRateCommandResponseDTO } from "../../../dtos/configRates/ConfigRateCommandDTO";

export interface ISoftDeleteConfigRateUseCase {
  execute( params: ConfigRateCommandRequestDTO ): Promise<ConfigRateCommandResponseDTO>;
}
