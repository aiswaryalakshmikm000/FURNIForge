import type { AssignDesignerDTO } from "../../../dtos/lead/AssignDesignerDTO";
import type { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";


export interface IAssignDesignerUseCase {
  execute( leadId: string, dto: AssignDesignerDTO ): Promise<LeadCommandResponseDTO>;
}