import { GetDesignerOptionsResponseDTO } from "../../../dtos/lead/GetDesignerOptionsDTO";


export interface IGetDesignerOptionsUseCase {
  execute(): Promise<GetDesignerOptionsResponseDTO>;
}
