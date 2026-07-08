import { inject, injectable } from "inversify";
import type { IUpdateTabUseCase } from "./interfaces/IUpdateTabUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { TabCommandResponseDTO } from "../../dtos/templateTabs/TabCommandDTO";
import type { UpdateTabDTO } from "../../dtos/templateTabs/UpdateTabDTO";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import { BadRequestError, NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TabCommandMapper } from "../../mappers/templateTab/TabCommandMapper";

@injectable()
export class UpdateTabUseCase implements IUpdateTabUseCase {
    constructor (
        @inject(TYPES.ITabRepository) private _tabRepository: ITabRepository,
    ) {}
    async execute(id: string, dto: UpdateTabDTO): Promise<TabCommandResponseDTO> {

        const tab = await this._tabRepository.findById(id);
        if(!tab) throw new NotFoundError(ERROR_MESSAGES.ADMIN.TAB.NOT_FOUND);

        const existingName = await this._tabRepository.findByTemplateAndName(tab.templateId, dto.name);
        if(existingName && existingName.id !== id) throw new BadRequestError(ERROR_MESSAGES.ADMIN.TAB.ALREADY_EXISTS);

        const existingDisplayOrder = await this._tabRepository.findByTemplateAndDisplayOrder(tab.templateId, dto.displayOrder);
        if(existingDisplayOrder && existingDisplayOrder.id !== id) throw new BadRequestError(ERROR_MESSAGES.ADMIN.TAB.DISPLAY_ORDER_EXISTS)

        tab.update(dto.name, dto.displayOrder);
        const updated = await this._tabRepository.update(id, tab);

        return TabCommandMapper.toResponse(updated)
    }
}