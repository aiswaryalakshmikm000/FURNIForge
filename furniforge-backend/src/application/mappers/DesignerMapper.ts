import { DesignerListItem } from "../../domain/read-models/designer/DesignerListItem";
import { DesignerResponseDTO } from "../dtos/designer/DesignerResponseDTO";

export class DesignerMapper {
  static toResponse(designer: DesignerListItem): DesignerResponseDTO {
    return {
      id: designer.id,
      designerRegNo: designer.designerRegNo,
      firstName: designer.firstName,
      lastName: designer.lastName,
      email: designer.email,
      phone: designer.phone,
      avatar: designer.avatar,
      location: designer.location,
      education: designer.education,
      rating: designer.rating,
      projectCount: designer.projectCount,
      totalRevenue: designer.totalRevenue,
      isBlocked: designer.isBlocked,
      isVerified: designer.isVerified,
      createdAt: designer.createdAt,
    };
  }
}
