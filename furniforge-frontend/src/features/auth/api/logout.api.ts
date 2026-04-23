import { httpClient } from "../../../core/api/http-client"
import type { ApiResponse } from "../../../types/api/api-response.type";

export const logoutApi = async (): Promise<ApiResponse<null>> => {
    const res = await httpClient.post("/logout"); 

    return res.data
}