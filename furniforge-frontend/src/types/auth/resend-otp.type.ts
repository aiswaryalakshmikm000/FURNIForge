export interface ResendOtpRequestDTO {
  tempUserId: string;
}

export interface ResendOtpResponseDTO {
  meta: {
    email: string;
    cooldown: number;
  };
}