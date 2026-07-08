import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../../dtos/templateTabs/TabCommandDTO";

export interface IDeleteTabUseCase {
  execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO>;
}