import { TabCommandRequestDTO, TabCommandResponseDTO } from "../../../dtos/templateTabs/TabCommandDTO";

export interface ISoftDeleteTabUseCase {
  execute(dto: TabCommandRequestDTO ): Promise<TabCommandResponseDTO>;
}