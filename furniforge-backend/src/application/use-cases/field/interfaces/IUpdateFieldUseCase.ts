import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../../dtos/fields/FieldCommandDTO";
import type { UpdateFieldDTO } from "../../../dtos/fields/UpdateFieldDTO";


export interface IUpdateFieldUseCase {
  execute( params: FieldCommandRequestDTO, dto: UpdateFieldDTO ): Promise<FieldCommandResponseDTO>;
}
