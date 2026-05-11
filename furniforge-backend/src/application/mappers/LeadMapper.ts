import { Lead } from "../../domain/entities/Lead.js";
import { Prisma, Lead as PrismaLead } from "../../generated/prisma/index.js";
import { LeadResponseDTO } from "../dtos/lead/LeadResponseDTO.js";

export class LeadMapper {

// static toResponse(lead: Lead): LeadResponseDTO {
//   return {
//     id: lead.id,
//     leadRegNo: lead.leadRegNo,
//     name: lead.name,
//     email: lead.email,
//     phone: lead.phone,
//     source: lead.source,
//     status: lead.status,
//     projectsInterestedIn: lead.projectsInterestedIn,
//     packageType: lead.packageType,
//     assignedDesignerId: lead.assignedDesignerId,
//     createdAt: lead.createdAt,
//   };
// }

  static toDomain(raw: PrismaLead): Lead {
    return Lead.fromPersistence(raw);
  }

  static toCreatePersistence(lead: Lead): Prisma.LeadCreateInput {
    return {
      id: lead.id,
      leadRegNo: lead.leadRegNo,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      source: lead.source,
      status: lead.status,
      projectsInterestedIn: lead.projectsInterestedIn,
      packageType: lead.packageType,
      assignedDesignerId: lead.assignedDesignerId,
      assignedAt: lead.assignedAt,
      convertedAt: lead.convertedAt,
      client: lead.clientId
        ? {
            connect: {
              id: lead.clientId,
            },
          }
        : undefined,
    };
  }

  static toUpdatePersistence(entity: Partial<Lead>): Prisma.LeadUpdateInput {
    return {};
  }
}
