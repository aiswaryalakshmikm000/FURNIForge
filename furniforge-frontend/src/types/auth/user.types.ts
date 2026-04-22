
import { UserRole } from "../enums/user-role.enum";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};