import { TemplateListItem } from "../../../domain/read-models/template/TemplateListItem";
import type { TemplateResponseDTO } from "../../dtos/templates/TemplateResponseDTO";

export class TemplateMapper {
  static toResponse( template: TemplateListItem ): TemplateResponseDTO {
    return {
      id: template.id,
      name: template.name,
      description: template.description,
      isActive: template.isActive,
    };
  }
}

