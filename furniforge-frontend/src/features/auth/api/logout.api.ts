import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client"
import type { ApiResponse } from "../../../types/api/api-response.type";

export const logoutApi = async (): Promise<ApiResponse<null>> => {
    const res = await httpClient.post(API_ENDPOINTS.AUTH.LOGOUT); 

    return res.data
}