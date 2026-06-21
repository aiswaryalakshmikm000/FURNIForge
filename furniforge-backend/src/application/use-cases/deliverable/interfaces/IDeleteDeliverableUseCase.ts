import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";

export interface IDeleteDeliverableUseCase {
    execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}