import type { GetAllDesignersQueryDTO, GetAllDesignersResponseDTO } from "../../../dtos/designer/GetAllDesignersDTO";

export interface IGetAllDesignersUseCase  {
  execute( query: GetAllDesignersQueryDTO ): Promise<GetAllDesignersResponseDTO>;
}