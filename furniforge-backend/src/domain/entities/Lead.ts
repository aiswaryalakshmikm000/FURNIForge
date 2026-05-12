import { LeadStatus, LeadSource, PackageType } from "../enums/Lead.js";
import { Lead as PrismaLead } from "../../generated/prisma/index.js";

export class Lead {
  private constructor(
    private _id: string,
    private _leadRegNo: string,
    private _name: string,
    private _email: string,
    private _phone: string,
    
    private _source: LeadSource,
    private _status: LeadStatus,
    private _projectsInterestedIn: string[],
    private _packageType: PackageType | null,
    private _clientId: string | null,
    private _assignedDesignerId: string | null,
    private _assignedAt: Date | null,
    private _convertedAt: Date | null,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  // ✅ For NEW leads
  static create(data: {
    leadRegNo: string;
    name: string;
    email: string;
    phone: string;
    source: LeadSource;
    clientId?: string;
    projectsInterestedIn?: string[];
    packageType?: PackageType;
  }): Lead {
    return new Lead(
      crypto.randomUUID(),
      data.leadRegNo,
      data.name,
      data.email,
      data.phone,
      data.source,
      LeadStatus.UNASSIGNED,
      data.projectsInterestedIn ?? [],
      data.packageType ?? null,
      data.clientId ?? null, 
      null, // assignedDesignerId
      null, // assignedAt
      null, // convertedAt
      new Date(),
      new Date(),
    );
  }

  // For DB → ENTITY
  static fromPersistence(raw: PrismaLead): Lead {
    return new Lead(
      raw.id,
      raw.leadRegNo,
      raw.name,
      raw.email,
      raw.phone,
      LeadSource[raw.source as keyof typeof LeadSource],
      LeadStatus[raw.status as keyof typeof LeadStatus],
      raw.projectsInterestedIn ?? [],  
      raw.packageType ? PackageType[raw.packageType as keyof typeof PackageType] : null,
      raw.clientId,
      raw.assignedDesignerId,
      raw.assignedAt,
      raw.convertedAt,
      new Date(raw.createdAt),
      new Date(raw.updatedAt),
    );
  }

  assignDesigner(designerId: string) {
    this._assignedDesignerId = designerId;
    this._assignedAt = new Date();
    this._status = LeadStatus.ASSIGNED;
    this._updatedAt = new Date();
  }

  updateStatus(status: LeadStatus) {
    this._status = status;
    this._updatedAt = new Date();
  }

  convertToClient(clientId: string) {
    this._clientId = clientId;
    this._status = LeadStatus.CONVERTED;
    this._convertedAt = new Date();
    this._updatedAt = new Date();
  }

  markAsLost() {
    this._status = LeadStatus.LOST;
    this._updatedAt = new Date();
  }

  // GETTERS
  get id() { return this._id; }
  get leadRegNo() { return this._leadRegNo; }
  get name() { return this._name; }
  get email() { return this._email; }
  get phone() { return this._phone; }
  get source() { return this._source; }
  get status() { return this._status; }
  get projectsInterestedIn() { return this._projectsInterestedIn; }
  get packageType() { return this._packageType; }
  get clientId() { return this._clientId; }
  get assignedDesignerId() { return this._assignedDesignerId; }
  get assignedAt() { return this._assignedAt; }
  get convertedAt() { return this._convertedAt; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
}
