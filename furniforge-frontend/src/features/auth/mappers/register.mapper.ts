import type { RegisterResponseDTO } from "../../../types/auth/register.type";
import type { ApiResponse } from "../../../types/api/api-response.type";

export const mapRegisterResponse = (api: ApiResponse<RegisterResponseDTO>): RegisterResponseDTO => {
  return {
    message: api.message,
    meta: {
      tempUserId: api.data.meta.tempUserId,
    },
  };
};
