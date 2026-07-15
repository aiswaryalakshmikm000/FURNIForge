import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IConfigRateRepository } from "../../../domain/repositories/IConfigRateRepository";
import { ConflictError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { ConfigRateCommandRequestDTO, ConfigRateCommandResponseDTO } from "../../dtos/configRates/ConfigRateCommandDTO";
import type { UpdateConfigRateDTO } from "../../dtos/configRates/UpdateConfigRateDTO";
import type { IUpdateConfigRateUseCase } from "./interfaces/IUpdateConfigRateUseCase";
import { ConfigRateCommandMapper } from "../../mappers/configRateMapper/configRateCommandMapper";

@injectable()
export class UpdateConfigRateUseCase implements IUpdateConfigRateUseCase{
  constructor(
    @inject(TYPES.IConfigRateRepository) private _configRateRepository: IConfigRateRepository,
  ) {}

  async execute( params: ConfigRateCommandRequestDTO, dto: UpdateConfigRateDTO ): Promise<ConfigRateCommandResponseDTO> {

    const configRate = await this._configRateRepository.findById(params.id);
    if (!configRate) throw new NotFoundError(ERROR_MESSAGES.ADMIN.CONFIG_RATE.NOT_FOUND);

    const duplicate = await this._configRateRepository.findDuplicate(configRate.id, dto.itemName, dto.brand, configRate.category);
    if (duplicate) throw new ConflictError(ERROR_MESSAGES.ADMIN.CONFIG_RATE.ALREADY_EXISTS);

    configRate.update({
      itemName: dto.itemName,
      brand: dto.brand,
      rate: dto.rate,
      marginPercent: dto.marginPercent,
      unit: dto.unit,
    });

    const updated = await this._configRateRepository.update( configRate.id, configRate );

    return ConfigRateCommandMapper.toResponse(updated)
  }
}
