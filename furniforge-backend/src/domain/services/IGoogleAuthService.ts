
export interface GoogleProfile {
  googleId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}
export interface IGoogleAuthService {
   verifyToken(token: string): Promise<GoogleProfile>;
}