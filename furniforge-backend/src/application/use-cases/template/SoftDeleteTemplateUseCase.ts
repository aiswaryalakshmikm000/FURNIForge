import { inject, injectable } from "inversify";
import type { IDeleteTemplateUseCase } from "./interfaces/IDeleteTemplateUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";
import type { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TemplateCommandMapper } from "../../mappers/template/TemplateCommandMapper";

@injectable()
export class SoftDeleteTemplateUseCase implements IDeleteTemplateUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private _templateRepository: ITemplateRepository,
  ) {}

  async execute( dto: TemplateCommandRequestDTO ): Promise<TemplateCommandResponseDTO> {

    const template = await this._templateRepository.findById( dto.id );
    if (!template) throw new NotFoundError( ERROR_MESSAGES.ADMIN.TEMPLATE.NOT_FOUND );
    
    template.softDelete();

    const updated = await this._templateRepository.update(
      template.id,
      template,
    );

    return TemplateCommandMapper.toResponse(updated);
  }
}