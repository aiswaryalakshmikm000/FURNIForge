import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../dtos/templateTabs/TabCommandDTO";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import { TabCommandMapper } from "../../mappers/templateTab/TabCommandMapper";
import type { ISoftDeleteTabUseCase } from "./interfaces/ISoftDeleteTabUseCase";

@injectable()
export class SoftDeleteTabUseCase implements ISoftDeleteTabUseCase {
  constructor(
    @inject(TYPES.ITabRepository) private _tabRepository: ITabRepository,
  ) {}

  async execute( dto: TabCommandRequestDTO ): Promise<TabCommandResponseDTO> {

    const tab = await this._tabRepository.findById( dto.id );
    if (!tab) throw new NotFoundError( ERROR_MESSAGES.ADMIN.TAB.NOT_FOUND );
    
    tab.softDelete();

    const updated = await this._tabRepository.update(
      tab.id,
      tab,
    );

    return TabCommandMapper.toResponse(updated);
  }
}