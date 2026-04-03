import { UserRole } from "@domain/enums/UserRole.js";

export class User {
  private constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public passwordHash: string,
    public role: UserRole = UserRole.CLIENT,
    public isVerified: boolean,
  ) {}

  static create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string;
    isVerified?: boolean,
}) {
    return new User(
      crypto.randomUUID(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.passwordHash,
      UserRole.CLIENT,
      data.isVerified ?? false,
    );
  }
}