import { RequirementFieldDeliverableListItem } from "../../../domain/read-models/requirementFields/RequirementFieldDeliverableListItem";
import { RequirementFieldDeliverableDTO } from "../../dtos/requirementFields/RequirementFieldDeliverableDTO";

export class RequirementFieldMapper {
  static toDeliverableDTO(
    row: RequirementFieldDeliverableListItem
  ): RequirementFieldDeliverableDTO {
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      isActive: row.isActive,
      templateCount: row.templateCount,
    };
  }
}