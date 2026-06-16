import { FieldType } from "../enums/FieldType";

export interface IFieldPersistence {
  id: string;
  tabId: string;
  label: string;
  fieldKey: string;
  fieldType: FieldType;
  options: string[];
  defaultValue: string | null;
  isActive: boolean;
  isRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}