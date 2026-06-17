import type { TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";
import type { CreateTabDTO } from "../../../dtos/templateTabs/createTabDTO";


export interface ICreateTabUseCase {
  execute( dto: CreateTabDTO ): Promise<TabCommandResponseDTO>;
}
