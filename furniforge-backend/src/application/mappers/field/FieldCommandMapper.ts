import { Field } from "../../../domain/entities/Field";
import type { FieldCommandResponseDTO } from "../../dtos/fields/fieldCommandDTO";

export class FieldCommandMapper {
  static toResponse( field: Field ): FieldCommandResponseDTO {
    return {
      id: field.id,
    };
  }
}

