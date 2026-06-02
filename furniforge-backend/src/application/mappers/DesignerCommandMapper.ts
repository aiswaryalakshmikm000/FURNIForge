import { User } from "../../domain/entities/User";
import { CreateDesignerResponseDTO } from "../dtos/designer/CreateDesignerDTO";
import { UpdateDesignerResponseDTO } from "../dtos/designer/UpdateDesignerDTO";

export class DesignerCommandMapper {
  static toCreateResponse(user: User): CreateDesignerResponseDTO {
    return {
      id: user.id,
    };
  }

  static toUpdateResponse(user: User): UpdateDesignerResponseDTO {
    return {
      id: user.id,
    };
  }
}
