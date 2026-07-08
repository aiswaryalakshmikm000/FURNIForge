import type { TabCommandResponseDTO } from "../../../dtos/templateTabs/TabCommandDTO";
import type { UpdateTabDTO } from "../../../dtos/templateTabs/UpdateTabDTO";

export interface IUpdateTabUseCase {
    execute (id: string, dto: UpdateTabDTO): Promise <TabCommandResponseDTO>
}