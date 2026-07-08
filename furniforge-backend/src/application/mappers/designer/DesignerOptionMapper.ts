import { DesignerOptionItem } from "../../../domain/read-models/designer/DesignerOptionItem";
import type { DesignerOptionResponseDTO } from "../../dtos/lead/GetDesignerOptionsDTO";

export class DesignerOptionMapper {
  static toResponse(designer: DesignerOptionItem): DesignerOptionResponseDTO {
    return {
      id: designer.id,
      fullName: `${designer.firstName} ${designer.lastName}`,
    };
  }
}
