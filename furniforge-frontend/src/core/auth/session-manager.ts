class SessionManager {
  private _tempUserKey = "temp_user_id";

  setTempUserId(id: string) {
    sessionStorage.setItem(this._tempUserKey, id);
  }

  getTempUserId() {
    return sessionStorage.getItem(this._tempUserKey);
  }

  clearTempUserId() {
    sessionStorage.removeItem(this._tempUserKey);
  }
}

export const sessionManager = new SessionManager();