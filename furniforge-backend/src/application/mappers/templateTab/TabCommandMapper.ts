import { TemplateTab } from "../../../domain/entities/TemplateTab";
import { TabCommandResponseDTO } from "../../dtos/templateTabs/templateTabCommandDTO";

export class TabCommandMapper {
  static toResponse( tab: TemplateTab ): TabCommandResponseDTO {
    return {
      id: tab.id,
    };
  }
}

