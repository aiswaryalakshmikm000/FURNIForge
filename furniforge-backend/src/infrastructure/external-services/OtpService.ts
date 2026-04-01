import { IOtpService } from "@domain/services/IOtpservice.js";

export class OtpService implements IOtpService {
  generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
