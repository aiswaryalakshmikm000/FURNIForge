import type { CreateDesignerDTO } from "../../../dtos/designer/CreateDesignerDTO";
import type { DesignerCommandResponseDTO } from "../../../dtos/designer/DesignerCommandDTO";

export interface ICreateDesignerUseCase {
  execute( dto: CreateDesignerDTO ): Promise<DesignerCommandResponseDTO>;
}