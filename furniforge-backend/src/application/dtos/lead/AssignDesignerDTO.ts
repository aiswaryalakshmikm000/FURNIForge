import z from "zod";

export const AssignDesignerSchema = z.object({
  designerId: z.string().uuid(),
});

export type AssignDesignerDTO = z.infer<typeof AssignDesignerSchema>;