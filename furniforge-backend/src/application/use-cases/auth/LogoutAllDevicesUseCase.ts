import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types"
import type { ILogoutAllDevicesUseCase } from "./interfaces/ILogoutAllDevicesUseCase";
import type { ISessionService } from "../../../domain/services/ISessionService";


@injectable()
export class LogoutAllDevicesUseCase implements ILogoutAllDevicesUseCase{
  constructor(
    @inject(TYPES.ISessionService) private _sessionService: ISessionService
  ) {}

  async execute(userId: string): Promise<void> {
    await this._sessionService.invalidateAllUserSessions(userId);
  }
}