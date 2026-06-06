import { User } from "../../../../domain/entities/User";
import { LeadCommandResponseDTO } from "../../../dtos/lead/LeadCommandResponseDTO";

export interface ICreateLeadUseCase {
  execute(user: User): Promise<LeadCommandResponseDTO>;
}