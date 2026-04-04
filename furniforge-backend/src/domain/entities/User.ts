import { UserRole } from "@domain/enums/UserRole.js";
import { Email } from "@domain/value-objects/Email.js";
import { ERROR_MESSAGES } from "@infrastructure/config/messages.js";

// export class User {
//   private constructor(
//     public id: string,
//     public firstName: string,
//     public lastName: string,
//     public email: string,
//     public phone: string,
//     public passwordHash: string,
//     public role: UserRole = UserRole.CLIENT,
//     public isVerified: boolean,
//   ) {}

//   static create(data: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     passwordHash: string;
//     isVerified?: boolean,
// }) {
//     return new User(
//       crypto.randomUUID(),
//       data.firstName,
//       data.lastName,
//       data.email,
//       data.phone,
//       data.passwordHash,
//       UserRole.CLIENT,
//       data.isVerified ?? false,
//     );
//   }
// }

export class User {
  private constructor(
    private _id: string,
    private _firstName: string,
    private _lastName: string,
    private _email: Email,
    private _phone: string,
    private _passwordHash: string,
    private _role: UserRole,
    private _isVerified: boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  // ✅ For NEW users
  static create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string;
  }): User {
    return new User(
      crypto.randomUUID(),
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      data.passwordHash,
      UserRole.CLIENT,
      false,
      new Date(),
      new Date()
    );
  }

  // ✅ For DB → ENTITY 
  static fromPersistence(raw: any): User {
    return new User(
      raw.id,
      raw.firstName,
      raw.lastName,
      new Email(raw.email),
      raw.phone,
      raw.passwordHash,
      raw.role,
      raw.isVerified,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  verifyEmail() {
    if (this._isVerified) {
      throw new Error(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_VERIFIED);
    }
    this._isVerified = true;
    this._updatedAt = new Date();
  }

  // ✅ Getters
  get id(): string { return this._id; }
  get firstName(): string { return this._firstName; }
  get lastName(): string { return this._lastName; }
  get email(): Email { return this._email; } 
  get phone(): string { return this._phone; }
  get role(): UserRole { return this._role; }
  get passwordHash(): string { return this._passwordHash; } 
  get isVerified(): boolean { return this._isVerified; }
}