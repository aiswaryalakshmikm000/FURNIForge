import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateLeadRequestDTO, CreateLeadResponseDTO } from "../types/create-lead.type";

export const createLeadApi = async (data: CreateLeadRequestDTO): Promise<ApiResponse<CreateLeadResponseDTO>> => {
    const res = await httpClient.post(API_ENDPOINTS.ADMIN.LEADS.CREATE, data)
    return res.data
}