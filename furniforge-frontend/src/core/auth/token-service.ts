class TokenService {
  private _key = "access_token";

  set(token: string) {
    localStorage.setItem(this._key, token);
  }

  get() {
    return localStorage.getItem(this._key);
  }

  clear() {
    localStorage.removeItem(this._key);
  }
}

export const tokenService = new TokenService();