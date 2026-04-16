export interface ILogoutAllDevicesUseCase {
    execute(userId: string): Promise<void>;
}
