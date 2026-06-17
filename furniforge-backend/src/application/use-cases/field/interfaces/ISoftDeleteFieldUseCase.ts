import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../../dtos/fields/fieldCommandDTO";

export interface ISoftDeleteFieldUseCase {
    execute(params: FieldCommandRequestDTO): Promise<FieldCommandResponseDTO>
}