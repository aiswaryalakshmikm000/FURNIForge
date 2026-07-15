import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateConfigRateUseCase } from "./interfaces/ICreateConfigRateUseCase";
import type { IConfigRateRepository } from "../../../domain/repositories/IConfigRateRepository";
import { ConfigRate } from "../../../domain/entities/ConfigRate";
import type { CreateConfigRateDTO } from "../../dtos/configRates/CreateConfigRateDTO";
import type { ConfigRateCommandResponseDTO } from "../../dtos/configRates/ConfigRateCommandDTO";
import { ConflictError } from "../../../domain/errors/AppError";
import { ConfigRateCommandMapper } from "../../mappers/configRateMapper/configRateCommandMapper";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

@injectable()
export class CreateConfigRateUseCase implements ICreateConfigRateUseCase {
  constructor(
    @inject(TYPES.IConfigRateRepository) private readonly _configRateRepository: IConfigRateRepository,
  ) {}

  async execute(dto: CreateConfigRateDTO): Promise<ConfigRateCommandResponseDTO> {
    const existing = await this._configRateRepository.findByItemNameAndBrand( dto.itemName, dto.brand, dto.category);

    if (existing) throw new ConflictError(ERROR_MESSAGES.ADMIN.CONFIG_RATE.ALREADY_EXISTS);

    const configRate = ConfigRate.create({
      category: dto.category,
      itemName: dto.itemName,
      brand: dto.brand,
      rate: dto.rate,
      marginPercent: dto.marginPercent,
      unit: dto.unit,
    });

    const created = await this._configRateRepository.create(configRate);

    return ConfigRateCommandMapper.toResponse(created);
  }
}
