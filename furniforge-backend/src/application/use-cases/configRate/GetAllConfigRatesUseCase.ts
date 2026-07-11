import { inject, injectable } from "inversify";
import type { IGetAllConfigRatesUseCase } from "./interfaces/IGetAllConfigRatesUseCase";
import type { IConfigRateRepository } from "../../../domain/repositories/IConfigRateRepository";
import { TYPES } from "../../../infrastructure/di/types";
import { ConfigRateMapper } from "../../mappers/configRateMapper/ConfigRateMapper";
import type { GetAllConfigRatesQueryDTO, GetAllConfigRatesResponseDTO } from "../../dtos/configRates/GetAllConfigRatesDTO";
import { ConfigCategory } from "../../../domain/enums/Config";

@injectable()
export class GetAllConfigRatesUseCase implements IGetAllConfigRatesUseCase {
  constructor(
    @inject(TYPES.IConfigRateRepository) private _configRateRepository: IConfigRateRepository,
  ) {}

  async execute(query: GetAllConfigRatesQueryDTO): Promise<GetAllConfigRatesResponseDTO> {
    const rates = await this._configRateRepository.findAllConfigRates(query);

    const mapped = rates.map(ConfigRateMapper.toResponse);

    return {
      shutterFinishRates: mapped.filter((x) => x.category === ConfigCategory.FINISH),

      cabinetMaterialRates: mapped.filter((x) => x.category === ConfigCategory.MATERIAL),

      handleRates: mapped.filter((x) => x.category === ConfigCategory.HANDLE),

      hingeRates: mapped.filter((x) => x.category === ConfigCategory.HINGE),

      accessoryRates: mapped.filter((x) => x.category === ConfigCategory.ACCESSORY),
    };
  }
}
