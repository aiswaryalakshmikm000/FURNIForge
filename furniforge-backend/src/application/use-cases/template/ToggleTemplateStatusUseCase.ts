import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";
import type { IToggleTemplateStatusUseCase } from "./interfaces/IToggleTemplateStatusUseCase";
import { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { NotFoundError } from "../../../domain/errors/AppError";
import { TemplateCommandMapper } from "../../mappers/template/TemplateCommandMapper";

@injectable()
export class ToggleTemplateStatusUseCase implements IToggleTemplateStatusUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private _templateRepository: ITemplateRepository 
  ) {}

  async execute( dto: TemplateCommandRequestDTO ): Promise<TemplateCommandResponseDTO> {

    const template = await this._templateRepository.findById(dto.id);
    if (!template) throw new NotFoundError(ERROR_MESSAGES.ADMIN.TEMPLATE.NOT_FOUND);

    template.toggleStatus();
    
    await this._templateRepository.update( template.id, template);

    return TemplateCommandMapper.toResponse(template);
  }
}