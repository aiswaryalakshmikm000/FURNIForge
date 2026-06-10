import type { DeliverableCommandRequestDTO } from "../../../dtos/deliverables/deliverableCommandDTO";
import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface ISoftDeleteDeliverableUseCase {
  execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}