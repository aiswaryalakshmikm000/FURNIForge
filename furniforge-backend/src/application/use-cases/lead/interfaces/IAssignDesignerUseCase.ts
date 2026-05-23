import { AssignDesignerResponseDTO } from "../../../dtos/lead/AssignDesignerDTO";


export interface IAssignDesignerUseCase {
  execute( leadId: string, designerId: string ): Promise<AssignDesignerResponseDTO>;
}