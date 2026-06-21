import { inject, injectable } from "inversify";
import type { IGetTemplatesByDeliverableUseCase } from "./interfaces/IGetTemplatesByDeliverableUseCase";
import { TYPES } from "../../../infrastructure/di/types";
import type { ITemplateRepository } from "../../../domain/repositories/ITemplateRepository";
import { RequirementFieldMapper } from "../../mappers/requirementField/RequirementFieldMapper";
import { GetTemplatesByDeliverableQueryDTO, GetTemplatesByDeliverableResponseDTO } from "../../dtos/requirementFields/GetTemplatesByDeliverableDTO";

@injectable()
export class GetTemplatesByDeliverableUseCase implements IGetTemplatesByDeliverableUseCase {
  constructor(
    @inject(TYPES.ITemplateRepository) private _templateRepository: ITemplateRepository
  ) {}

  async execute( query: GetTemplatesByDeliverableQueryDTO ): Promise<GetTemplatesByDeliverableResponseDTO> {

    const rows = await this._templateRepository.findTemplatesByDeliverable( query.deliverableId );

    return { templates: rows.map( RequirementFieldMapper.toTemplateResponse ),
    };
  }
}