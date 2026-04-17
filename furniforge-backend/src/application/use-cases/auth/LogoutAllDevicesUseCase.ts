import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js"
import { ILogoutAllDevicesUseCase } from "./interfaces/ILogoutAllDevicesUseCase.js";
import { ISessionService } from "../../../domain/services/ISessionService.js";


@injectable()
export class LogoutAllDevicesUseCase implements ILogoutAllDevicesUseCase{
  constructor(
    @inject(TYPES.ISessionService) private sessionService: ISessionService
  ) {}

  async execute(userId: string): Promise<void> {
    await this.sessionService.invalidateAllUserSessions(userId);
  }
}