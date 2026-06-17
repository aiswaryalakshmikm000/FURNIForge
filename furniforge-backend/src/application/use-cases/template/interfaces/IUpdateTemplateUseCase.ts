import type { TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";
import type { UpdateTemplateDTO } from "../../../dtos/templates/UpdateTemplateDTO";

export interface IUpdateTemplateUseCase {
    execute(id: string, dto: UpdateTemplateDTO): Promise<TemplateCommandResponseDTO>
}