import { AssignDesignerDTO, AssignDesignerResponseDTO } from "../../../dtos/lead/AssignDesignerDTO";


export interface IAssignDesignerUseCase {
  execute( leadId: string, dto: AssignDesignerDTO ): Promise<AssignDesignerResponseDTO>;
}