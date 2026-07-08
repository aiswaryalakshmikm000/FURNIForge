import { Field } from "../../../domain/entities/Field";
import type { FieldCommandResponseDTO } from "../../dtos/fields/FieldCommandDTO";

export class FieldCommandMapper {
  static toResponse( field: Field ): FieldCommandResponseDTO {
    return {
      id: field.id,
    };
  }
}

