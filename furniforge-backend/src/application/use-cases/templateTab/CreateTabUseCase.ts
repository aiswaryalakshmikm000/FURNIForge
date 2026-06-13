import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITemplateTabRepository } from "../../../domain/repositories/ITemplateTabRepository";
import type { TemplateTabFormDTO } from "../../dtos/templateTabs/templateTabFormDTO";
import type { TabCommandResponseDTO } from "../../dtos/templateTabs/templateTabCommandDTO";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TemplateTab } from "../../../domain/entities/TemplateTab";
import { TabCommandMapper } from "../../mappers/templateTab/TabCommandMapper";
import type { ICreateTabUseCase } from "./interfaces/ICreateTabUseCase";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";

@injectable()
export class CreateTabUseCase implements ICreateTabUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private readonly _templateRepository: ITemplateRepository,
    @inject(TYPES.ITemplateTabRepository) private readonly _tabRepository: ITemplateTabRepository,
  ) {}

  async execute( dto: TemplateTabFormDTO ): Promise<TabCommandResponseDTO> {

    const template = await this._templateRepository.findById( dto.templateId );
    if (!template) throw new NotFoundError( ERROR_MESSAGES.ADMIN.TEMPLATE.NOT_FOUND );
    
    const existingTab = await this._tabRepository.findByTemplateAndName(
        dto.templateId,
        dto.name,
      );
    if (existingTab) throw new BadRequestError( ERROR_MESSAGES.ADMIN.TAB.ALREADY_EXISTS );

    const displayOrderExists = await this._tabRepository.existsDisplayOrder(
        dto.templateId,
        dto.displayOrder,
      );
    if (displayOrderExists) throw new BadRequestError( ERROR_MESSAGES.ADMIN.TAB.DISPLAY_ORDER_EXISTS );

    const tab = TemplateTab.create({
      templateId: dto.templateId,
      name: dto.name,
      displayOrder: dto.displayOrder,
    });

    const created = await this._tabRepository.create(tab);

    return TabCommandMapper.toResponse( created );
  }
}