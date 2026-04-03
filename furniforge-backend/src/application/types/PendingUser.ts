export type PendingUser = {
  tempUserId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passwordHash: string;
  isVerified: boolean;
  createdAt: number;
};