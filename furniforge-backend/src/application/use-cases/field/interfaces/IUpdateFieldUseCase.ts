import type { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../../dtos/fields/fieldCommandDTO";
import type { UpdateFieldDTO } from "../../../dtos/fields/updateFieldDTO";


export interface IUpdateFieldUseCase {
  execute( params: FieldCommandRequestDTO, dto: UpdateFieldDTO ): Promise<FieldCommandResponseDTO>;
}
