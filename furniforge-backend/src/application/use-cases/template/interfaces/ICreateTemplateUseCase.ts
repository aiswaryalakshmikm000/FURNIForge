import type { TemplateCommandResponseDTO } from "../../../dtos/templates/templateCommandDTO";
import type { CreateTemplateDTO } from "../../../dtos/templates/CreateTemplateDTO";

export interface ICreateTemplateUseCase {
  execute(dto: CreateTemplateDTO & {createdById: string}): Promise<TemplateCommandResponseDTO>;
}