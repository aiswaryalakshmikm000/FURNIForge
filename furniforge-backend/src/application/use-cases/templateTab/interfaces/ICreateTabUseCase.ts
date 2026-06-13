import { TabCommandResponseDTO } from "../../../dtos/templateTabs/templateTabCommandDTO";
import { TemplateTabFormDTO } from "../../../dtos/templateTabs/templateTabFormDTO";


export interface ICreateTabUseCase {
  execute( dto: TemplateTabFormDTO ): Promise<TabCommandResponseDTO>;
}
