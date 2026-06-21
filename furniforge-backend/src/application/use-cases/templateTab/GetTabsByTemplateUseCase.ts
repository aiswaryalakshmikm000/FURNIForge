import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IGetTabsByTemplateUseCase } from "./interfaces/IGetTabsByTemplateUseCase";
import type { ITabRepository } from "../../../domain/repositories/ITabRepository";
import type { GetTabsByTemplateQueryDTO, GetTabsByTemplateResponseDTO } from "../../dtos/requirementFields/GetTabsByTemplateDTO";
import { RequirementFieldMapper } from "../../mappers/requirementField/RequirementFieldMapper";

@injectable()
export class GetTabsByTemplateUseCase implements IGetTabsByTemplateUseCase {
  constructor(
    @inject(TYPES.ITabRepository) private _tabRepository: ITabRepository
  ) {}

  async execute( query: GetTabsByTemplateQueryDTO ): Promise<GetTabsByTemplateResponseDTO> {

    const rows = await this._tabRepository.findTabsByTemplate( query.templateId );

    return { tabs: rows.map( RequirementFieldMapper.toTabResponse)};
  }
}