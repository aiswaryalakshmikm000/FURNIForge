import { TabCommandRequestDTO, TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";

export interface IToggleTabStatusUseCase {
  execute(dto: TabCommandRequestDTO): Promise<TabCommandResponseDTO>;
}