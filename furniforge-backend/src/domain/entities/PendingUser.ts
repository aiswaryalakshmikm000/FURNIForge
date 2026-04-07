export class PendingUser {
  constructor(
    private _tempUserId: string,
    private _email: string,
    private _firstName: string,
    private _lastName: string,
    private _phone: string,
    private _passwordHash: string,
    private _createdAt: number,
    private _isVerified: boolean
  ) {}

  static fromPersistence(raw: any): PendingUser {
    return new PendingUser(
      raw._tempUserId,
      raw._email,
      raw._firstName,
      raw._lastName,
      raw._phone,
      raw._passwordHash,
      raw._createdAt,
      raw._isVerified
    );
  }
  
  get tempUserId():string { return this._tempUserId }
  get email():string { return this._email }
  get firstName():string { return this._firstName }
  get lastName():string { return this._lastName }
  get phone():string { return this._phone }
  get passwordHash():string { return this._passwordHash }
  get isVerified():boolean { return this._isVerified }

}