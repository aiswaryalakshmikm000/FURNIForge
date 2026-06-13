import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";

import type { IDeleteTemplateUseCase } from "./interfaces/IDeleteTemplateUseCase";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";

import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";

import { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";
import { TemplateCommandMapper } from "../../mappers/template/TemplateCommandMapper";

@injectable()
export class DeleteTemplateUseCase implements IDeleteTemplateUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private _templateRepository: ITemplateRepository,
  ) {}

  async execute( dto: TemplateCommandRequestDTO, ): Promise<TemplateCommandResponseDTO> {

    const template = await this._templateRepository.findById(dto.id);
    if (!template)  throw new NotFoundError( ERROR_MESSAGES.ADMIN.TEMPLATE.NOT_FOUND );

    await this._templateRepository.delete( dto.id );
    return TemplateCommandMapper.toResponse(template);
  }
}