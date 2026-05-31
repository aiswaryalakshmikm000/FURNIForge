import { z } from "zod";

export const DeleteLeadParamsSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteLeadParamsDTO = z.infer< typeof DeleteLeadParamsSchema >;



export interface DeleteLeadResponseDTO { 
    deletedLeadId: string 
}