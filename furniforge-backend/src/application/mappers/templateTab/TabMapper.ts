import { TabListItem } from "../../../domain/read-models/templateTab/TabListItem";
import type { TabResponseDTO } from "../../dtos/templateTabs/TabResponseMapper";

export class TabMapper {
  static toResponse( tab: TabListItem ): TabResponseDTO {
    return {
      id: tab.id,
      templateId: tab.templateId,
      name: tab.name,
      displayOrder: tab.displayOrder,
      isActive: tab.isActive,
    };
  }
}

