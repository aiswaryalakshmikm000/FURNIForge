export interface RegisterRequestDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterResponseDTO {
  message: string;
  meta: {
    tempUserId: string;
    email: string;
    cooldown: number;
  };
}


