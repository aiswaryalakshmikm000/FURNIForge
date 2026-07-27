import { DeliverableOptionsListItem } from "../../../domain/read-models/deliverable/DeliverableOptionsListItem";
import type { DeliverableOptionDTO } from "../../dtos/deliverables/GetDeliverableOptionsDTO";

export class DeliverableOptionMapper {
  static toResponse( deliverable: DeliverableOptionsListItem): DeliverableOptionDTO {
    return {
      id: deliverable.id,
      name: deliverable.name,
    };
  }
}