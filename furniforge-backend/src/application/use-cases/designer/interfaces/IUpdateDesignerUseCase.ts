import { DesignerCommandResponseDTO } from "../../../dtos/designer/DesignerCommandDTO";
import { UpdateDesignerDTO } from "../../../dtos/designer/UpdateDesignerDTO";

export interface IUpdateDesignerUseCase {
  execute( designerId: string, dto: UpdateDesignerDTO ): Promise<DesignerCommandResponseDTO>;
}