import { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";
import { DeliverableFormDTO } from "../../../dtos/deliverables/deliverableFormDTO";

export interface IUpdateDeliverableUseCase {
  execute( deliverableId: string, dto: DeliverableFormDTO ): Promise<DeliverableCommandResponseDTO>;
}