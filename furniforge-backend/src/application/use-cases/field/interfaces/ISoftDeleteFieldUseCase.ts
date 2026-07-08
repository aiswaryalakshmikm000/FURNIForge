import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../../dtos/fields/FieldCommandDTO";

export interface ISoftDeleteFieldUseCase {
    execute(params: FieldCommandRequestDTO): Promise<FieldCommandResponseDTO>
}