import { UpdateDesignerDTO, UpdateDesignerResponseDTO } from "../../../dtos/designer/UpdateDesignerDTO";

export interface IUpdateDesignerUseCase {
  execute( designerId: string, dto: UpdateDesignerDTO ): Promise<UpdateDesignerResponseDTO>;
}