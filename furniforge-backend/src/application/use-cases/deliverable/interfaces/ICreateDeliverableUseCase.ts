import type { DeliverableFormDTO } from "../../../dtos/deliverables/DeliverableFormDTO";
import type { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";

export interface ICreateDeliverableUseCase {
  execute( dto: DeliverableFormDTO & {createdById: string}): Promise<DeliverableCommandResponseDTO>;
}