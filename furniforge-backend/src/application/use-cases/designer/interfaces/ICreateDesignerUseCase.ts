import type { CreateDesignerDTO, CreateDesignerResponseDTO } from "../../../dtos/designer/CreateDesignerDTO";

export interface ICreateDesignerUseCase {
  execute( dto: CreateDesignerDTO ): Promise<CreateDesignerResponseDTO>;
}