export interface IPendingUserPersistence {
  tempUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  passwordHash: string;
  createdAt: Date | string;
  isVerified: boolean;
}