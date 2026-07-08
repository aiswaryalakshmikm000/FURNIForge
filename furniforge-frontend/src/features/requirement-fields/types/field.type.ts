import type { FieldType } from "../../../types/enums/field-type.enum";

export interface GetFieldsByTabIdRequestDTO {
  tabId: string;
}

/**
 * 
 */

export interface RequirementFieldResponseDTO {
  id: string;
  tabId: string;
  label: string;
  fieldKey: string;
  fieldType: FieldType;
  options?: string[];
  defaultValue: string | null;
  isRequired: boolean;
  isActive: boolean;
}

export interface GetFieldsByTabIdResponseDTO {
  fields: RequirementFieldResponseDTO[];
}