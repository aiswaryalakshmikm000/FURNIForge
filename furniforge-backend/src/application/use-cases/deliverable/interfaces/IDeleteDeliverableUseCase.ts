import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface IDeleteDeliverableUseCase {
    execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}