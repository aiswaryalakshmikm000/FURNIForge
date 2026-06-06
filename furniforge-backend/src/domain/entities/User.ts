import { UserRole } from "../../domain/enums/UserRole";
import { Email } from "../../domain/value-objects/Email";
import { ERROR_MESSAGES } from "../../infrastructure/config/messages";
import { BadRequestError } from "../../domain/errors/AppError";
import { IUserPersistence } from "../types/IUserPersistence";

export class User {
  private constructor(
    private _id: string,
    private _clientRegNo: string | undefined,
    private _designerRegNo: string | undefined,
    private _firstName: string,
    private _lastName: string,
    private _email: Email,
    private _phone: string,
    private _avatar: string | undefined,
    private _passwordHash: string | null,
    private _oauthProvider: string | null,
    private _oauthId: string | null,
    private _role: UserRole,
    private _address: Record<string, unknown> | undefined,
    private _occupation: string | undefined,
    private _education: string | undefined,
    private _projectCount: number,
    private _totalRevenue: number,
    private _rating: number,
    private _isVerified: boolean,
    private _isBlocked: boolean,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    passwordHash: string | null;
  }): User {
    return new User(
      crypto.randomUUID(),
      undefined,
      undefined,
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      undefined,
      data.passwordHash,
      null,
      null,
      UserRole.CLIENT,
      undefined,
      undefined,
      undefined,
      0,
      0,
      0,
      false,
      false,
      new Date(),
      new Date(),
    );
  }

  static createGoogleUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    googleId: string;
    avatar?: string;
  }): User {
    return new User(
      crypto.randomUUID(),
      undefined,
      undefined,
      data.firstName,
      data.lastName,
      new Email(data.email),
      "",
      data.avatar,
      null,
      "google",
      data.googleId,
      UserRole.CLIENT,
      undefined,
      undefined,
      undefined,
      0,
      0,
      0,
      true,
      false,
      new Date(),
      new Date(),
    );
  }

  static createDesigner(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    designerRegNo: string;
  }): User {
    return new User(
      crypto.randomUUID(),
      undefined,
      data.designerRegNo,
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      undefined,
      null,
      null,
      null,
      UserRole.DESIGNER,
      undefined,
      undefined,
      undefined,
      0,
      0,
      0,
      false,
      false,
      new Date(),
      new Date(),
    );
  }

  updateDesignerDetails(data: {
    firstName: string;
    lastName: string;
    phone: string;
  }) {
    this._firstName= data.firstName;
    this._lastName= data.lastName;
    this._phone= data.phone;
    this._updatedAt= new Date()
  }

  static fromPersistence(data: IUserPersistence): User {
    return new User(
      data.id,
      data.clientRegNo ?? undefined,
      data.designerRegNo ?? undefined,
      data.firstName,
      data.lastName,
      new Email(data.email),
      data.phone,
      data.avatar ?? undefined,
      data.passwordHash,
      data.oauthProvider,
      data.oauthId,
      data.role,
      data.address ?? undefined,
      data.occupation ?? undefined,
      data.education ?? undefined,
      data.projectCount,
      data.totalRevenue,
      data.rating,
      data.isVerified,
      data.isBlocked,
      data.createdAt,
      data.updatedAt,
    );
  }

  verifyEmail() {
    if (this._isVerified)  throw new BadRequestError(ERROR_MESSAGES.AUTH.EMAIL_ALREADY_VERIFIED);
    this._isVerified = true;
    this._updatedAt = new Date();
  };

  block() {
    this._isBlocked = true;
    this._updatedAt = new Date();
  };

  unblock() {
    this._isBlocked = false;
    this._updatedAt = new Date();
  };

  get id(): string { return this._id };
  get firstName(): string { return this._firstName };
  get lastName(): string { return this._lastName };
  get email(): Email { return this._email };
  get phone(): string { return this._phone };
  get role(): UserRole { return this._role };
  get passwordHash(): string | null { return this._passwordHash };
  get isVerified(): boolean { return this._isVerified };
  get oAuthProvider(): string | null { return this._oauthProvider };
  get oauthId(): string | null { return this._oauthId };
  get createdAt(): Date { return this._createdAt };
  get updatedAt(): Date { return this._updatedAt };
  get designerRegNo(): string | undefined { return this._designerRegNo };
  get isBlocked(): boolean { return this._isBlocked };
  get clientRegNo() { return this._clientRegNo };
  get avatar() { return this._avatar };
  get address() { return this._address };
  get occupation() { return this._occupation };
  get education() { return this._education };
  get projectCount() { return this._projectCount };
  get totalRevenue() { return this._totalRevenue };
  get rating() { return this._rating };
}