import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../dtos/templateTabs/TabCommandDTO";
import type { IToggleTabStatusUseCase } from "./interfaces/IToggleTabUseCase";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import { TabCommandMapper } from "../../mappers/templateTab/TabCommandMapper";

@injectable()
export class ToggleTabStatusUseCase implements IToggleTabStatusUseCase {
  constructor(
    @inject(TYPES.ITabRepository) private readonly _tabRepository: ITabRepository,
  ) {}

  async execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO> {

    const tab = await this._tabRepository.findById(dto.id);
    if (!tab) throw new NotFoundError( ERROR_MESSAGES.ADMIN.TAB.NOT_FOUND );
    
    tab.toggleStatus();

    const updated = await this._tabRepository.update(
      dto.id,
      tab
    );

    return TabCommandMapper.toResponse(updated);
  }
}