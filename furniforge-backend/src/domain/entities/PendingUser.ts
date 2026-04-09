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

  static fromPersistence(raw: any): PendingUser {
    return new PendingUser(
      raw._tempUserId,
      raw._email,
      raw._firstName,
      raw._lastName,
      raw._phone,
      raw._passwordHash,
      new Date(raw._createdAt),
      raw._isVerified
    );
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