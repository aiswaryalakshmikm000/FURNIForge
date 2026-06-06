import type { DesignerCommandRequestDTO, DesignerCommandResponseDTO } from "../../../dtos/designer/DesignerCommandDTO";

export interface IToggleDesignerBlockUseCase {
  execute(dto: DesignerCommandRequestDTO): Promise<DesignerCommandResponseDTO>;
}