import { User } from "../../../domain/entities/User";
import { DesignerCommandResponseDTO } from "../../dtos/designer/DesignerCommandDTO";

export class DesignerCommandMapper {
  static toResponse(user: User): DesignerCommandResponseDTO {
    return {
      id: user.id,
    };
  }
}
