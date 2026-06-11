import { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";

export interface IToggleTemplateStatusUseCase {
  execute( dto: TemplateCommandRequestDTO ): Promise<TemplateCommandResponseDTO>;
}