export interface ITemplateTabPersistence {
  id: string;
  templateId: string;
  name: string;
  displayOrder: number;
  isActive: Boolean;
  createdAt: Date;
  updatedAt: Date;
}