import { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";

export interface IDeleteTemplateUseCase {
  execute(dto: TemplateCommandRequestDTO ): Promise<TemplateCommandResponseDTO>;
}