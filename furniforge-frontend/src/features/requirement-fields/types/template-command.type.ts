import type { TemplateFormValues } from "../validation/template-form.validation";

export type CreateTemplateDTO = TemplateFormValues & {
  deliverableId: string;
};

export type UpdateTemplateDTO = TemplateFormValues;

export interface TemplateCommandResponseDTO {
  id: string;
}