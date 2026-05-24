import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GoogleAuthResponseDTO } from "../../../types/auth/login.type";

export const googleAuthApi = async ( token:string ): Promise<ApiResponse<GoogleAuthResponseDTO>> => {
 const res = await httpClient.post(API_ENDPOINTS.AUTH.GOOGLE, { token } );

 return res.data
};
