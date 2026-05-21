import { UserRole } from "../enums/UserRole";

export interface IUserPersistence {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string;
    role: UserRole;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}