export interface RegisterResponseDTO {
  meta: {
    tempUserId: string;
    email: string;
    cooldown: number;
  };
}