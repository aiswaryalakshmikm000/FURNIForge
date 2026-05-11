import { GetAllLeadsQueryDTO, GetAllLeadsResponseDTO } from "../../../dtos/lead/GetAllLeadsDTO.js";

export interface IGetAllLeadsUseCase {
  execute( query: GetAllLeadsQueryDTO ): Promise<GetAllLeadsResponseDTO>;
}