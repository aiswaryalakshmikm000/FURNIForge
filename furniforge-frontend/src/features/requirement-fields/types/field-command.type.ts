import type { FieldFormValues } from "../validation/field-form-validation";

export type CreateFieldDTO = FieldFormValues & {
  tabId: string;
};

export type UpdateFieldDTO = FieldFormValues

export interface FieldCommandResponseDTO {
  id: string;
}