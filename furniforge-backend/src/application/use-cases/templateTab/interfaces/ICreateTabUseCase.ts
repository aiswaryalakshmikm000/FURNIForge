import type { TabCommandResponseDTO } from "../../../dtos/templateTabs/TabCommandDTO";
import type { CreateTabDTO } from "../../../dtos/templateTabs/CreateTabDTO";


export interface ICreateTabUseCase {
  execute( dto: CreateTabDTO ): Promise<TabCommandResponseDTO>;
}
