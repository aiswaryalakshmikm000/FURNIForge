import type { LeadFormValues } from "../validation/lead-form.validation";

export type CreateLeadDTO = LeadFormValues & {
  email: string;
};

export type UpdateLeadDTO = Omit<LeadFormValues, "email">;