import { ConfigRateCommandRequestDTO, ConfigRateCommandResponseDTO } from "../../../dtos/configRates/ConfigRateCommandDTO";

export interface IToggleConfigRateStatusUseCase {
    execute( params: ConfigRateCommandRequestDTO ): Promise<ConfigRateCommandResponseDTO>;
}