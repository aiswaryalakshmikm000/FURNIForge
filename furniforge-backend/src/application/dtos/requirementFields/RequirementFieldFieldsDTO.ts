import { FieldType } from "../../../domain/enums/FieldType";

export interface RequirementFieldFieldDTO {
  id: string;
  tabId: string;
  label: string;
  fieldKey: string;
  fieldType: FieldType;
  options: string[];
  defaultValue: string | null;
  isRequired: boolean;
  isActive: boolean;
}