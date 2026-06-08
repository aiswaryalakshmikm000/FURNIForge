export interface IDeliverablePersistence {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  createdById: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}