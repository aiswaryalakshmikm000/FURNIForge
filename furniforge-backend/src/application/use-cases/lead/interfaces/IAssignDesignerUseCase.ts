import { AssignDesignerDTO } from "../../../dtos/lead/AssignDesignerDTO";
import { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";


export interface IAssignDesignerUseCase {
  execute( leadId: string, dto: AssignDesignerDTO ): Promise<LeadCommandResponseDTO>;
}