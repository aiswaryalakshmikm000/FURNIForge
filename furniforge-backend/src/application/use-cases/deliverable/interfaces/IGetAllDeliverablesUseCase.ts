import type { GetAllDeliverablesQueryDTO, GetAllDeliverablesResponseDTO } from "../../../dtos/deliverables/GetAllDeliverablesDTO";

export interface IGetAllDeliverablesUseCase {
  execute( query: GetAllDeliverablesQueryDTO ): Promise<GetAllDeliverablesResponseDTO>;
}
