import { FieldType } from "../../enums/FieldType";

export interface FieldListItem {
  id: string;
  tabId: string;
  label: string;
  fieldKey: string;
  fieldType: FieldType;
  options: string[];
  defaultValue: string | null;
  isRequired: boolean;
  deletedAt: Date | null;
  isActive: boolean;
  createdAt: Date;
}