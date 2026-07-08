export interface ITabPersistence {
  id: string;
  templateId: string;
  name: string;
  displayOrder: number;
  isActive: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}