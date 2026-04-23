class SessionManager {
  private _tempUserKey = "temp_user_id";
  private _email = "login_email";

  setTempUserId(id: string) {
    sessionStorage.setItem(this._tempUserKey, id);
  }

  setEmailId(id: string) {
    sessionStorage.setItem(this._email, id)
  }

  getTempUserId() {
    return sessionStorage.getItem(this._tempUserKey);
  }

  getEmailId() {
    return sessionStorage.getItem(this._email)
  }

  clearTempUserId() {
    sessionStorage.removeItem(this._tempUserKey);
  }
}

export const sessionManager = new SessionManager();