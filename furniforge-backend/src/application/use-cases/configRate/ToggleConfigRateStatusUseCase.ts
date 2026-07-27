import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IConfigRateRepository } from "../../../domain/repositories/IConfigRateRepository";
import type { ConfigRateCommandRequestDTO, ConfigRateCommandResponseDTO } from "../../dtos/configRates/ConfigRateCommandDTO";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { ConfigRateCommandMapper } from "../../mappers/configRateMapper/configRateCommandMapper";
import type { IToggleConfigRateStatusUseCase } from "./interfaces/IToggleConfigRateStatusUseCase";

@injectable()
export class ToggleConfigRateStatusUseCase implements IToggleConfigRateStatusUseCase {

    constructor(
        @inject(TYPES.IConfigRateRepository) private readonly configRateRepository: IConfigRateRepository
    ) {}

    async execute( params: ConfigRateCommandRequestDTO ): Promise<ConfigRateCommandResponseDTO> {

        const configRate = await this.configRateRepository.findById(params.id);
        if (!configRate) throw new NotFoundError( ERROR_MESSAGES.ADMIN.CONFIG_RATE.NOT_FOUND );

        if(configRate.deletedAt) throw new BadRequestError(ERROR_MESSAGES.ADMIN.CONFIG_RATE.DELETE_BANNED);
        
        configRate.toggleStatus();
        const updated = await this.configRateRepository.update( configRate.id, configRate );

        return ConfigRateCommandMapper.toResponse(updated);
    }
}