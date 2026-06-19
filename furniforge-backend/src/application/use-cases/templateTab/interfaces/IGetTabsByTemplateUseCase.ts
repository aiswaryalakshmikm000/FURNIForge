import { GetTabsByTemplateQueryDTO, GetTabsByTemplateResponseDTO } from "../../../dtos/requirementFields/GetTabsByTemplateDTO";

export interface IGetTabsByTemplateUseCase {
  execute( query: GetTabsByTemplateQueryDTO ): Promise<GetTabsByTemplateResponseDTO>;
}