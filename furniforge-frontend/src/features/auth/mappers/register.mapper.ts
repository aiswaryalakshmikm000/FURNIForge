import type { RegisterResponseDTO } from "../../../types/auth/register.type";

export const mapRegisterResponse = (api: any): RegisterResponseDTO => {
  return {
    message: api.message,
    meta: {
      tempUserId: api.data.meta.tempUserId,
      email: api.data.meta.email,
    },
  };
};
