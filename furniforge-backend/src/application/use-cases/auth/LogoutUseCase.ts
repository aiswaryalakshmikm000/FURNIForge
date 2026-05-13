import { injectable, inject } from "inversify";
import { TYPES } from "../../../infrastructure/di/types.js"
import { ILogoutUseCase } from "./interfaces/ILogoutUseCase.js";
import { ISessionService } from "../../../domain/services/ISessionService.js";

@injectable()
export class LogoutUseCase implements ILogoutUseCase {
  constructor(
    @inject(TYPES.ISessionService) private _sessionService: ISessionService
  ) {}

  async execute(sessionId: string): Promise<void> {
    await this._sessionService.revoke(sessionId);
  }
}