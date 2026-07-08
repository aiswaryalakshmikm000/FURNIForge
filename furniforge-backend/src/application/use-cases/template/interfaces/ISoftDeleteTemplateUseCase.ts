import type { TemplateCommandRequestDTO, TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";

export interface ISoftDeleteTemplateUseCase {
  execute(dto: TemplateCommandRequestDTO ): Promise<TemplateCommandResponseDTO>;
}