import type { TabFormValues } from "../validation/tab-form.validation";

export type CreateTabDTO = TabFormValues & {
  templateId: string;
};

export type UpdateTabDTO = TabFormValues

export interface TabCommandResponseDTO {
  id: string;
}