
export interface DesignerListItem {
  id: string;
  designerRegNo: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  avatar: string | null;
  location: string | null;
  education: string | null;
  rating: number;
  projectCount: number;
  totalRevenue: number;
  isActive: boolean;
  isBlocked: boolean;
  createdAt: Date;
}