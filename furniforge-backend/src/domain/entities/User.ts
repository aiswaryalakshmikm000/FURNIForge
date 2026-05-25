import { UserRole } from "../../domain/enums/UserRole";
import { Email } from "../../domain/value-objects/Email";
import { ERROR_MESSAGES } from "../../infrastructure/config/messages";
import { BadRequestError } from "../../domain/errors/AppError";
import { IUserPersistence } from "../types/IUserPersistence";

export class User {
  private constructor(
    private _id: string,
    private _firstName: string,
    private _lastName: string,
    private _email: Email,
    private _phone: string,
    private _passwordHash: string | null,
    private _oauthProvider: string | null,
    private _oauthId: string | null,
    private _role: UserRole,
    private _isVerified: boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  // For NEW users
  static create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string | null;
  }): User {
    return new User(
      crypto.randomUUID(),
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      data.passwordHash,
      null,
      null,
      UserRole.CLIENT,
      false,
      new Date(),
      new Date()
    );
  }

  static createGoogleUser(data:{
    firstName:string;
    lastName:string;
    email:string;
    googleId: string;
    avatar?:string;
}): User {

    const user = new User(
        crypto.randomUUID(),
        data.firstName,
        data.lastName,
        new Email(data.email),
        "",
        null,
        "google",
        data.googleId,
        UserRole.CLIENT,
        true,
        new Date(),
        new Date()
    );

    user._oauthProvider = "google";

    return user;
}

  static fromPersistence(data: IUserPersistence): User {
    return new User(
      data.id,
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      data.passwordHash,
      data.oauthProvider,
      data.oauthId,
      data.role,
      data.isVerified,
      data.createdAt,
      data.updatedAt,
    );
  }

  verifyEmail() {
    if (this._isVerified) {
      throw new BadRequestError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_VERIFIED);
    }
    this._isVerified = true;
    this._updatedAt = new Date();
  }

  //  Getters
  get id(): string { return this._id };
  get firstName(): string { return this._firstName };
  get lastName(): string { return this._lastName; };
  get email(): Email { return this._email };
  get phone(): string { return this._phone };
  get role(): UserRole { return this._role };
  get passwordHash(): string | null { return this._passwordHash }; 
  get isVerified(): boolean { return this._isVerified };
  get oAuthProvider(): string | null { return this._oauthProvider };
  get oauthId(): string | null { return this._oauthId };
}