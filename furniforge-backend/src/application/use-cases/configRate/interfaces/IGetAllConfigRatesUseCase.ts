import type { GetAllConfigRatesQueryDTO, GetAllConfigRatesResponseDTO } from "../../../dtos/configRates/GetAllConfigRatesDTO";

export interface IGetAllConfigRatesUseCase {
  execute( query: GetAllConfigRatesQueryDTO ): Promise<GetAllConfigRatesResponseDTO>;
}
