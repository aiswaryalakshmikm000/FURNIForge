export interface ITemplatePersistence {
  id: string;
  deliverableId: string;
  name: string;
  description: string;
  isActive: boolean;
  createdById: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}