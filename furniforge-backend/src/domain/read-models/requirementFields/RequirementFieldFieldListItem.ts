import { FieldType } from "../../enums/FieldType";

export interface RequirementFieldFieldListItem {
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