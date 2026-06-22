import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ICreateTemplateUseCase } from "./interfaces/ICreateTemplateUseCase";
import { Template } from "../../../domain/entities/Template";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { CreateTemplateDTO } from "../../dtos/templates/CreateTemplateDTO";
import type { TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";
import type { IDeliverableRepository } from "../../../domain/repositories/IDeliverableRepository";
import { TemplateCommandMapper } from "../../mappers/template/TemplateCommandMapper";

@injectable()
export class CreateTemplateUseCase implements ICreateTemplateUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private readonly _templateRepository: ITemplateRepository,
    @inject(TYPES.IDeliverableRepository) private readonly _deliverableRepository: IDeliverableRepository,
  ) {}

  async execute( dto: CreateTemplateDTO & {createdById: string}): Promise<TemplateCommandResponseDTO> {

    const deliverable = await this._deliverableRepository.findById( dto.deliverableId );
    if (!deliverable) throw new NotFoundError( ERROR_MESSAGES.ADMIN.DELIVERABLE.NOT_FOUND );

    const existingTemplate = await this._templateRepository.findByDeliverableAndName(
        dto.deliverableId,
        dto.name
      );
    if (existingTemplate?.deletedAt) {
      existingTemplate.restore();

      const restored = await this._templateRepository.update( existingTemplate.id, existingTemplate);
      return TemplateCommandMapper.toResponse(restored);
    }

    const template = Template.create({
      deliverableId: dto.deliverableId,
      name: dto.name,
      description: dto.description,
      createdById: dto.createdById,
    });

    const created = await this._templateRepository.create(template);

    return TemplateCommandMapper.toResponse(created)
  }
}