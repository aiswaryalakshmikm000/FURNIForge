import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types"
import type { ILogoutUseCase } from "./interfaces/ILogoutUseCase";
import type { ISessionService } from "../../../domain/services/ISessionService";

@injectable()
export class LogoutUseCase implements ILogoutUseCase {
  constructor(
    @inject(TYPES.ISessionService) private _sessionService: ISessionService
  ) {}

  async execute(sessionId: string): Promise<void> {
    await this._sessionService.revoke(sessionId);
  }
}