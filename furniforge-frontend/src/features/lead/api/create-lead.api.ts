import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateLeadDTO, LeadCommandResponseDTO } from "../types/lead-form.type";

export const createLeadApi = async (data: CreateLeadDTO): Promise<ApiResponse<LeadCommandResponseDTO>> => {
    const res = await httpClient.post(API_ENDPOINTS.ADMIN.LEADS.CREATE, data)
    return res.data
}