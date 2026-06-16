import { CreateFieldDTO } from "../../../dtos/fields/createFieldDTO";
import { FieldCommandResponseDTO } from "../../../dtos/fields/fieldCommandDTO";

export interface ICreateFieldUseCase {
  execute( dto: CreateFieldDTO ): Promise<FieldCommandResponseDTO>;
}