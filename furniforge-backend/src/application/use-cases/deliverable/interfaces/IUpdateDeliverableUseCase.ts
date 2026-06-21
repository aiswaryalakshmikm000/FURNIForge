import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";
import type { DeliverableFormDTO } from "../../../dtos/deliverables/DeliverableFormDTO";

export interface IUpdateDeliverableUseCase {
  execute( deliverableId: string, dto: DeliverableFormDTO ): Promise<DeliverableCommandResponseDTO>;
}