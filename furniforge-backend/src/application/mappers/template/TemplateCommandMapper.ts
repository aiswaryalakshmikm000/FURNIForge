import { Template } from "../../../domain/entities/Template";
import { TemplateCommandResponseDTO } from "../../dtos/templates/templateCommandDTO";

export class TemplateCommandMapper {
  static toResponse(template: Template): TemplateCommandResponseDTO {
    return {
      id: template.id,
    };
  }
}
