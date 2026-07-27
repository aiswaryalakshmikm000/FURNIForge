import { ConfigRateCommandResponseDTO } from "../../../dtos/configRates/ConfigRateCommandDTO";
import { CreateConfigRateDTO } from "../../../dtos/configRates/CreateConfigRateDTO";

export interface ICreateConfigRateUseCase {
  execute( dto: CreateConfigRateDTO ): Promise<ConfigRateCommandResponseDTO>;
}