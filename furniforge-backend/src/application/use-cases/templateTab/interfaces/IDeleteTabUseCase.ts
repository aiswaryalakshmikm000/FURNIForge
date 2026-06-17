import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";

export interface IDeleteTabUseCase {
  execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO>;
}