import { TabListItem } from "../../../domain/read-models/templateTab/TabListItem";
import { TabResponseDTO } from "../../dtos/templateTabs/tabResponseMapper";

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

