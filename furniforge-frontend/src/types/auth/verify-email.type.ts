export type VerifyEmailRequestDTO = {
  token: string;
};

export type VerifyEmailResponseDTO = {
  userId: string;
  email: string;
  verified: boolean;
  resetToken: string;
};