import type { DeliverableCommandRequestDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";
import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";

export interface ISoftDeleteDeliverableUseCase {
  execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}