import type { DesignerFormValues } from "../validation/designer-form.validation";

export type CreateDesignerDTO = DesignerFormValues;

export type UpdateDesignerDTO = Omit<DesignerFormValues, "email">;


export interface DesignerCommandResponseDTO  {
    id: string
}