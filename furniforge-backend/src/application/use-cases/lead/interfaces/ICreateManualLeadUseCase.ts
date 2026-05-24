import { CreateLeadDTO } from "../../../dtos/lead/CreateLeadDTO";
import { LeadResponseDTO } from "../../../dtos/lead/LeadResponseDTO";

export interface ICreateManualLeadUseCase {
  execute( dto: CreateLeadDTO ): Promise<LeadResponseDTO>;
}