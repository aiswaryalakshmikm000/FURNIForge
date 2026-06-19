import { RequirementFieldDeliverableListItem } from "../../../domain/read-models/requirementFields/RequirementFieldDeliverableListItem";
import { RequirementFieldTabListItem } from "../../../domain/read-models/requirementFields/RequirementFieldTabListItem";
import { RequirementFieldTemplateListItem } from "../../../domain/read-models/requirementFields/RequirementFieldTemplateListItem";
import type { RequirementFieldDeliverableDTO } from "../../dtos/requirementFields/RequirementFieldDeliverableDTO";
import { RequirementFieldTabDTO } from "../../dtos/requirementFields/RequirementFieldTabDTO";
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

  static toTabResponse( row: RequirementFieldTabListItem ): RequirementFieldTabDTO {
    return {
      id: row.id,
      name: row.name,
      isActive: row.isActive,
      displayOrder: row.displayOrder,
      fieldCount: row.fieldCount,
    };
  }
}