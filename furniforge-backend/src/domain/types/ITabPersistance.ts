export interface ITabPersistence {
  id: string;
  templateId: string;
  name: string;
  displayOrder: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}