class SessionManager {
  private _tempUserKey = "temp_user_id";
  private _email = "login_email";
  private _resetToken = "reset_token";
  private _signupOtpExpiry = "signup_otp_expiry";
  private _resetOtpExpiry = "reset_otp_expiry";

  //tempUserId
  setTempUserId(id: string) {
    sessionStorage.setItem(this._tempUserKey, id);
  }

  getTempUserId() {
    return sessionStorage.getItem(this._tempUserKey);
  }

  clearTempUserId() {
    sessionStorage.removeItem(this._tempUserKey);
  }

  //email
  setEmailId(id: string) {
    sessionStorage.setItem(this._email, id);
  }

  getEmailId() {
    return sessionStorage.getItem(this._email);
  }

  clearEmailId() {
    sessionStorage.removeItem(this._email);
  }

  //reset token
  setResetToken(token: string) {
    sessionStorage.setItem(this._resetToken, token);
  }

  getResetToken() {
    return sessionStorage.getItem(this._resetToken);
  }

  clearResetToken() {
    sessionStorage.removeItem(this._resetToken);
  }

  //signup otp expiry
  setSignupCooldown(time: string) {
    sessionStorage.setItem(this._signupOtpExpiry, time);
  }

  getSignupCooldown() {
    return sessionStorage.getItem(this._signupOtpExpiry);
  }

  clearSignupCooldown() {
    sessionStorage.removeItem(this._signupOtpExpiry);
  }

  //forgot resend otp expiry
  setResetCooldown(time: string) {
    sessionStorage.setItem(this._resetOtpExpiry, time);
  }

  getResetCooldown() {
    return sessionStorage.getItem(this._resetOtpExpiry);
  }

  clearResetCooldown() {
    sessionStorage.removeItem(this._resetOtpExpiry);
  }

  clearSignupFlow() {
  this.clearTempUserId();
  this.clearEmailId();
  this.clearSignupCooldown();
}

clearForgotPasswordFlow() {
  this.clearEmailId();
  this.clearResetToken();
  this.clearResetCooldown();
}

  //clear all,
  clearAll() {
    this.clearTempUserId();
    this.clearEmailId();
    this.clearResetToken();
    this.clearSignupCooldown();
    this.clearResetCooldown();
  }
}

export const sessionManager = new SessionManager();
