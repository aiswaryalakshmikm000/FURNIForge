
import { UserRole } from "../enums/user-role.enum";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};