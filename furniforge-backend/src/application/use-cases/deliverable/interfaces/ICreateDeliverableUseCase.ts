import { CreateDeliverableDTO } from "../../../dtos/deliverables/createDeliverableDTO";
import { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface ICreateDeliverableUseCase {
  execute( dto: CreateDeliverableDTO & {createdById: string}): Promise<DeliverableCommandResponseDTO>;
}