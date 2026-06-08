import { DeliverableCommandRequestDTO } from "../../../dtos/deliverables/deliverableCommandDTO";
import { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface ISoftDeleteDeliverableUseCase {
  execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}