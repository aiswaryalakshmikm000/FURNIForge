import type { DeliverableFormDTO } from "../../../dtos/deliverables/deliverableFormDTO";
import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface ICreateDeliverableUseCase {
  execute( dto: DeliverableFormDTO & {createdById: string}): Promise<DeliverableCommandResponseDTO>;
}