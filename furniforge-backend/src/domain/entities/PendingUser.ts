import type { IPendingUserPersistence } from "../types/IPendingUserPersistence";

export class PendingUser {
  constructor(
    private _tempUserId: string,
    private _email: string,
    private _firstName: string,
    private _lastName: string,
    private _phone: string,
    private _passwordHash: string,
    private _createdAt: Date,
    private _isVerified: boolean
  ) {}

  static create(data: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    passwordHash: string;
  }): PendingUser {
    const tempUserId = `temp_${Date.now()}_${data.email}`;

    return new PendingUser(
      tempUserId,
      data.email,
      data.firstName,
      data.lastName,
      data.phone,
      data.passwordHash,
      new Date(),
      false
    );
  }

  static fromPersistence(raw: IPendingUserPersistence): PendingUser {
    return new PendingUser(
      raw.tempUserId,
      raw.email,
      raw.firstName,
      raw.lastName,
      raw.phone,
      raw.passwordHash,
      new Date(raw.createdAt),
      raw.isVerified
    );
  }

  toPersistence(): IPendingUserPersistence {
    return {
      tempUserId: this._tempUserId,
      email: this._email,
      firstName: this._firstName,
      lastName: this._lastName,
      phone: this._phone,
      passwordHash: this._passwordHash,
      createdAt: this._createdAt,
      isVerified: this._isVerified,
    };
  }

  isExpired(ttl: number): boolean {
    return Date.now() - this._createdAt.getTime() > ttl * 1000;
  }
  
  get tempUserId():string { return this._tempUserId }
  get email():string { return this._email }
  get firstName():string { return this._firstName }
  get lastName():string { return this._lastName }
  get phone():string { return this._phone }
  get passwordHash():string { return this._passwordHash }
  get isVerified():boolean { return this._isVerified }
}