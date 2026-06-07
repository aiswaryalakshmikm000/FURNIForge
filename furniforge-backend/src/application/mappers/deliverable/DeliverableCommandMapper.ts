import { Deliverable } from "../../../domain/entities/Deliverable";
import { DeliverableCommandResponseDTO } from "../../dtos/deliverables/deliverableCommandDTO";

export class DeliverableCommandMapper {
  static toResponse(deliverable: Deliverable): DeliverableCommandResponseDTO {
    return {
      id: deliverable.id,
    };
  }
}
