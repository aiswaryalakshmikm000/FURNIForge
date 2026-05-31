import { DeleteLeadParamsDTO, DeleteLeadResponseDTO } from "../../../dtos/lead/DeleteLeadDTO";

export interface IDeleteLeadUseCase {
  execute ( dto: DeleteLeadParamsDTO ): Promise<DeleteLeadResponseDTO> 
}