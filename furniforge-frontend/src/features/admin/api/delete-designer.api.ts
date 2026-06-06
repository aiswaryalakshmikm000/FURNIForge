import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DesignerCommandResponseDTO } from "../types/designer-form.type";

export const deleteDesignerApi = async (designerId: string): Promise<ApiResponse<DesignerCommandResponseDTO>> => {
    const res = await httpClient.delete(API_ENDPOINTS.ADMIN.DESIGNERS.DELETE(designerId));

    return res.data
}