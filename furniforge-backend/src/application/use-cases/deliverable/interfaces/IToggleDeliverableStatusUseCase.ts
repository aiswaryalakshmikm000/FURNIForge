import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../../dtos/deliverables/deliverableCommandDTO";

export interface IToggleDeliverableStatusUseCase {
  execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}