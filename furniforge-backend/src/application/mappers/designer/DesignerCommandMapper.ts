import { User } from "../../../domain/entities/User";
import type { DesignerCommandResponseDTO } from "../../dtos/designer/DesignerCommandDTO";

export class DesignerCommandMapper {
  static toResponse(user: User): DesignerCommandResponseDTO {
    return {
      id: user.id,
    };
  }
}
