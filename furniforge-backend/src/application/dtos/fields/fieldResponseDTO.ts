import { FieldType } from "../../../domain/enums/FieldType";

export interface FieldResponseDTO {
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