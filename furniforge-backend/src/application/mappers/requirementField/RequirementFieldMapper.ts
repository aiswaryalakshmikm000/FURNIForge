import { RequirementFieldDeliverableListItem } from "../../../domain/read-models/requirementFields/RequirementFieldDeliverableListItem";
import { RequirementFieldTemplateListItem } from "../../../domain/read-models/requirementFields/RequirementFieldTemplateListItem";
import type { RequirementFieldDeliverableDTO } from "../../dtos/requirementFields/RequirementFieldDeliverableDTO";
import type { RequirementFieldTemplateDTO } from "../../dtos/requirementFields/RequirementFieldTemplateDTO";

export class RequirementFieldMapper {
  static toDeliverableResponse( row: RequirementFieldDeliverableListItem ): RequirementFieldDeliverableDTO {
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      isActive: row.isActive,
      templateCount: row.templateCount,
    };
  }

  static toTemplateResponse( row: RequirementFieldTemplateListItem ): RequirementFieldTemplateDTO {
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      isActive: row.isActive,
      tabCount: row.tabCount,
      fieldCount: row.fieldCount,
    };
  }
}