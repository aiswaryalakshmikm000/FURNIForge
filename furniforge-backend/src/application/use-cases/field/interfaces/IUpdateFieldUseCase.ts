import { FieldCommandRequestDTO, FieldCommandResponseDTO } from "../../../dtos/fields/fieldCommandDTO";
import { UpdateFieldDTO } from "../../../dtos/fields/updateFieldDTO";


export interface IUpdateFieldUseCase {
  execute( params: FieldCommandRequestDTO, dto: UpdateFieldDTO ): Promise<FieldCommandResponseDTO>;
}
