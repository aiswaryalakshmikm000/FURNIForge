import { GetAllLeadsQueryDTO, GetAllLeadsResponseDTO } from "../../../dtos/lead/GetAllLeadsDTO";

export interface IGetAllLeadsUseCase {
  execute( query: GetAllLeadsQueryDTO ): Promise<GetAllLeadsResponseDTO>;
}