import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IUpdateTemplateUseCase } from "./interfaces/IUpdateTemplateUseCase";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";
import { UpdateTemplateDTO } from "../../dtos/templates/UpdateTemplateDTO";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TemplateCommandMapper } from "../../mappers/template/TemplateCommandMapper";
import type { TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";

@injectable()
export class UpdateTemplateUseCase implements IUpdateTemplateUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private readonly _templateRepository: ITemplateRepository,
  ) {}

  async execute( templateId: string, dto: UpdateTemplateDTO ): Promise<TemplateCommandResponseDTO> {

    const template = await this._templateRepository.findById(templateId);
    if (!template)  throw new NotFoundError(ERROR_MESSAGES.ADMIN.TEMPLATE.NOT_FOUND);

    const duplicate = await this._templateRepository.findByDeliverableAndName(
      template.deliverableId,
      dto.name,
    );

    if (duplicate && duplicate.id !== templateId) throw new BadRequestError(ERROR_MESSAGES.ADMIN.TEMPLATE.ALREADY_EXISTS);

    template.update(dto.name, dto.description);

    const updated = await this._templateRepository.update(templateId, template);

    return TemplateCommandMapper.toResponse(updated);
  }
}
