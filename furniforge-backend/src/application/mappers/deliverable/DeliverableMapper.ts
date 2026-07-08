import { DeliverableListItem } from "../../../domain/read-models/deliverable/DeliverableMapper";
import type { DeliverableResponseDTO } from "../../dtos/deliverables/DeliverableResponseDTO";

export class DeliverableMapper {
  static toResponse(
    deliverable: DeliverableListItem,
  ): DeliverableResponseDTO {
    return {
      id: deliverable.id,
      name: deliverable.name,
      description: deliverable.description,
      icon: deliverable.icon,
      isActive: deliverable.isActive,
      createdAt: deliverable.createdAt,
    };
  }
}