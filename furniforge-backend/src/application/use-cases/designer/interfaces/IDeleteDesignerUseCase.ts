import type { DesignerCommandRequestDTO, DesignerCommandResponseDTO } from "../../../dtos/designer/DesignerCommandDTO";

export interface IDeleteDesignerUseCase {
    execute(dto: DesignerCommandRequestDTO): Promise<DesignerCommandResponseDTO>;
}