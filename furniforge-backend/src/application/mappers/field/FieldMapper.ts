import { FieldListItem } from "../../../domain/read-models/field/FieldListItem";
import type { FieldResponseDTO } from "../../dtos/fields/fieldResponseDTO";

export class FieldMapper {

  static toResponse( field: FieldListItem ): FieldResponseDTO {
    return {
      id: field.id,
      tabId: field.tabId,
      label: field.label,
      fieldKey: field.fieldKey,
      fieldType: field.fieldType,
      options: field.options,
      defaultValue: field.defaultValue,
      isRequired: field.isRequired,
      deletedAt: field.deletedAt,
      isActive: field.isActive,
    };
  }
}