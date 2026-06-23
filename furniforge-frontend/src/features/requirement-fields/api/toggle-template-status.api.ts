import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { TemplateCommandResponseDTO } from "../types/template-command.type";

export const toggleTemplateStatusApi = async (templateId: string): Promise<ApiResponse<TemplateCommandResponseDTO>> =>{
    const res = await httpClient.patch(API_ENDPOINTS.ADMIN.TEMPLATES.TOGGLE_STATUS(templateId))
    return res.data
}

