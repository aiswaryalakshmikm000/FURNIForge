import { UserRole } from "../enums/UserRole";

export interface IUserPersistence {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string | null;
    oauthId: string | null;
    oauthProvider: string | null;
    role: UserRole;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}