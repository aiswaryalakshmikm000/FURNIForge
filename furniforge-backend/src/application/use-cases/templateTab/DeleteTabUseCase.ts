import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import { NotFoundError } from "../../../domain/errors/AppError";
import { ERROR_MESSAGES } from "../../../infrastructure/config/messages";
import type { IDeleteTabUseCase } from "./interfaces/IDeleteTabUseCase";
import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../dtos/templateTabs/tabCommandDTO";
import { TabCommandMapper } from "../../mappers/templateTab/TabCommandMapper";

@injectable()
export class DeleteTabUseCase implements IDeleteTabUseCase {
  constructor(
    @inject(TYPES.ITabRepository) private _tabRepository: ITabRepository
  ) {}

  async execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO> {

    const tab = await this._tabRepository.findById(dto.id);
    if (!tab)  throw new NotFoundError( ERROR_MESSAGES.ADMIN.TAB.NOT_FOUND );

    await this._tabRepository.delete(dto.id);
    return TabCommandMapper.toResponse(tab)
  } 
}