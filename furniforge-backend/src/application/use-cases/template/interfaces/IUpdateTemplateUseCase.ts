import { TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";
import { UpdateTemplateDTO } from "../../../dtos/templates/UpdateTemplateDTO";

export interface IUpdateTemplateUseCase {
    execute(id: string, dto: UpdateTemplateDTO): Promise<TemplateCommandResponseDTO>
}