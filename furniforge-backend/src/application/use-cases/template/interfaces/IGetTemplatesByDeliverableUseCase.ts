import type { GetTemplatesByDeliverableQueryDTO, GetTemplatesByDeliverableResponseDTO } from "../../../dtos/requirementFields/GetTemplatesByDeliverableDTO";

export interface IGetTemplatesByDeliverableUseCase {
  execute( query: GetTemplatesByDeliverableQueryDTO ): Promise<GetTemplatesByDeliverableResponseDTO>;
}