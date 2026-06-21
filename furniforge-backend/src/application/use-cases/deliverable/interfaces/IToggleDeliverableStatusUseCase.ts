import type { DeliverableCommandRequestDTO, DeliverableCommandResponseDTO } from "../../../dtos/deliverables/DeliverableCommandDTO";

export interface IToggleDeliverableStatusUseCase {
  execute( dto: DeliverableCommandRequestDTO ): Promise<DeliverableCommandResponseDTO>;
}