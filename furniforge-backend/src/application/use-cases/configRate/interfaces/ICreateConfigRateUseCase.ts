import { ConfigRateCommandResponseDTO } from "../../../dtos/configRates/ConfigRateCommandDTO";
import { ConfigRateFormDTO } from "../../../dtos/configRates/ConfigRateFormDTO";

export interface ICreateConfigRateUseCase {
  execute( dto: ConfigRateFormDTO ): Promise<ConfigRateCommandResponseDTO>;
}