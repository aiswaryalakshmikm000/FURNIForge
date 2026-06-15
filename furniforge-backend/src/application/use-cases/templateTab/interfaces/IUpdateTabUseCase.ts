import { TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";
import { UpdateTabDTO } from "../../../dtos/templateTabs/updateTabDTO";

export interface IUpdateTabUseCase {
    execute (id: string, dto: UpdateTabDTO): Promise <TabCommandResponseDTO>
}