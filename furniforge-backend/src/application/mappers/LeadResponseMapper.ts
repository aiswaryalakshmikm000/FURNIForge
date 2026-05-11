import { LeadResponseDTO } from "../dtos/lead/LeadResponseDTO.js";
import { Prisma, User, Lead } from "../../generated/prisma/index.js";

type LeadWithClient = Prisma.LeadGetPayload<{
  include: {
    client: true;
  };
}>;

type AddressObject = {
  city?: string;
};

export class LeadResponseMapper {

  static toDTO(raw: LeadWithClient): LeadResponseDTO {

    let location: string | null = null;

    if (
      raw.client?.address &&
      typeof raw.client.address === "object" &&
      !Array.isArray(raw.client.address)
    ) {
      const address = raw.client.address as AddressObject

      location = address.city ?? null;
    }

    return {
      id: raw.id,
      leadRegNo: raw.leadRegNo,
      name: raw.name,
      email: raw.email,
      phone: raw.phone,
      location,
      source: raw.source,
      status: raw.status,
      projectsInterestedIn: raw.projectsInterestedIn,
      packageType: raw.packageType,
      assignedDesignerId: raw.assignedDesignerId,
      createdAt: raw.createdAt,
    };
  }
}