import type { CreateFieldDTO } from "../../../dtos/fields/createFieldDTO";
import type { FieldCommandResponseDTO } from "../../../dtos/fields/fieldCommandDTO";

export interface ICreateFieldUseCase {
  execute( dto: CreateFieldDTO ): Promise<FieldCommandResponseDTO>;
}