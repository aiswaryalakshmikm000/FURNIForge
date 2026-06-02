import { UpdateLeadFDTO, UpdateLeadResponseDTO } from "../../../dtos/lead/UpdateLeadDTO";

export interface IUpdateLeadUseCase {
  execute( leadId: string, dto: UpdateLeadFDTO ): Promise<UpdateLeadResponseDTO>;
}