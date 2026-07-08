import type { TabCommandRequestDTO, TabCommandResponseDTO } from "../../../dtos/templateTabs/TabCommandDTO";

export interface IToggleTabStatusUseCase {
  execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO>;
}