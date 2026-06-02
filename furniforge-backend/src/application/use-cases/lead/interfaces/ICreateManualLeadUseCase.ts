import type { CreateLeadDTO, CreateLeadResponseDTO } from "../../../dtos/lead/CreateLeadDTO";

export interface ICreateManualLeadUseCase {
  execute( dto: CreateLeadDTO ): Promise<CreateLeadResponseDTO>;
}