import { GetDeliverableOptionsResponseDTO } from "../../../dtos/deliverables/GetDeliverableOptionsDTO";

export interface IGetDeliverableOptionsUseCase {
    execute(): Promise<GetDeliverableOptionsResponseDTO>
}