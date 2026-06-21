import { inject, injectable } from "inversify";
import { TYPES } from "../../../infrastructure/di/types";
import type { IFieldRepository } from "../../../domain/repositories/IFieldRepository";
import { RequirementFieldMapper } from "../../mappers/requirementField/RequirementFieldMapper";
import type { GetFieldsByTabQueryDTO, GetFieldsByTabResponseDTO } from "../../dtos/requirementFields/GetFieldsByTabDTO";
import type { IGetFieldsByTabUseCase } from "./interfaces/IGetFieldsByTabUseCase";

@injectable()
export class GetFieldsByTabUseCase implements IGetFieldsByTabUseCase {

  constructor(
    @inject(TYPES.IFieldRepository) private _fieldRepository: IFieldRepository
  ) {}

  async execute( query: GetFieldsByTabQueryDTO ): Promise<GetFieldsByTabResponseDTO> {

    const rows = await this._fieldRepository.findFieldsByTab( query.tabId );

    return { fields: rows.map( RequirementFieldMapper.toFieldResponse ) };
  }
}