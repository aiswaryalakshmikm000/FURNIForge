import { GetFieldsByTabQueryDTO, GetFieldsByTabResponseDTO } from "../../../dtos/requirementFields/GetFieldsByTabDTO";

export interface IGetFieldsByTabUseCase {
  execute( query: GetFieldsByTabQueryDTO ): Promise<GetFieldsByTabResponseDTO>;
}