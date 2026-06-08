import {  DeliverableFormDTO } from "../../../dtos/deliverables/deliverableFormDTO";
import { DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface ICreateDeliverableUseCase {
  execute( dto: DeliverableFormDTO & {createdById: string}): Promise<DeliverableCommandResponseDTO>;
}