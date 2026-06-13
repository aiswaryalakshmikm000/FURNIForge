import { Tab } from "../../../domain/entities/Tab";
import { TabCommandResponseDTO } from "../../dtos/templateTabs/tabCommandDTO";

export class TabCommandMapper {
  static toResponse( tab: Tab ): TabCommandResponseDTO {
    return {
      id: tab.id,
    };
  }
}

