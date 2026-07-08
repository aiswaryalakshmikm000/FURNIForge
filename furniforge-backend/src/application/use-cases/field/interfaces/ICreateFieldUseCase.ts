import type { CreateFieldDTO } from "../../../dtos/fields/CreateFieldDTO";
import type { FieldCommandResponseDTO } from "../../../dtos/fields/FieldCommandDTO";

export interface ICreateFieldUseCase {
  execute( dto: CreateFieldDTO ): Promise<FieldCommandResponseDTO>;
}