import { TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";
import { CreateTabDTO } from "../../../dtos/templateTabs/createTabDTO";


export interface ICreateTabUseCase {
  execute( dto: CreateTabDTO ): Promise<TabCommandResponseDTO>;
}
