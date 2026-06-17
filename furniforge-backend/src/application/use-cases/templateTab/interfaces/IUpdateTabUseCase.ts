import type { TabCommandResponseDTO } from "../../../dtos/templateTabs/tabCommandDTO";
import type { UpdateTabDTO } from "../../../dtos/templateTabs/updateTabDTO";

export interface IUpdateTabUseCase {
    execute (id: string, dto: UpdateTabDTO): Promise <TabCommandResponseDTO>
}