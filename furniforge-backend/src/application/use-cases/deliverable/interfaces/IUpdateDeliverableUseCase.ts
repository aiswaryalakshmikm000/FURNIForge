import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";
import type { DeliverableFormDTO } from "../../../dtos/deliverables/deliverableFormDTO";

export interface IUpdateDeliverableUseCase {
  execute( deliverableId: string, dto: DeliverableFormDTO ): Promise<DeliverableCommandResponseDTO>;
}