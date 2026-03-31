import { UserRole } from "@domain/enums/UserRole.js";

export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public passwordHash: string,
    public role: UserRole = UserRole.CLIENT
  ) {}

  static create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string;
  }) {
    return new User(
      crypto.randomUUID(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.passwordHash,
      UserRole.CLIENT
    );
  }
}