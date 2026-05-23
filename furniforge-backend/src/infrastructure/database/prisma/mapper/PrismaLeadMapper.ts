import { Lead } from "../../../../domain/entities/Lead";
import { Prisma, Lead as PrismaLead } from "../../../../generated/prisma/index";
import { LeadSource, LeadStatus, PackageType } from "../../../../domain/enums/Lead";

export class PrismaLeadMapper {
  static toDomain(raw: PrismaLead): Lead {
    return Lead.fromPersistence({
      id: raw.id,
      leadRegNo: raw.leadRegNo,
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      source: raw.source as LeadSource,
      status: raw.status as LeadStatus,
      projectsInterestedIn: raw.projectsInterestedIn ?? [],
      packageType: raw.packageType as PackageType | null,
      clientId: raw.clientId,
      assignedDesignerId: raw.assignedDesignerId,
      assignedAt: raw.assignedAt,
      convertedAt: raw.convertedAt,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
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
      assignedDesigner: lead.assignedDesignerId
        ? {connect: {id: lead.assignedDesignerId}}
        : undefined,
      assignedAt: lead.assignedAt,
      convertedAt: lead.convertedAt,
      client: lead.clientId
        ? {
            connect: { id: lead.clientId },
          }
        : undefined,
    };
  }

  static toUpdatePersistence(lead: Lead): Prisma.LeadUpdateInput {
    return {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      source: lead.source,
      status: lead.status,
      projectsInterestedIn: lead.projectsInterestedIn,
      packageType: lead.packageType,
      assignedDesigner: lead.assignedDesignerId
        ? {connect: {id: lead.assignedDesignerId}}
        : {disconnect: true} ,
      assignedAt: lead.assignedAt,
      convertedAt: lead.convertedAt,
      updatedAt: lead.updatedAt,
      client: lead.clientId
        ? { connect: { id: lead.clientId } }
        : { disconnect: true },
    };
  }
}
