import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { LeadCommandResponseDTO, UpdateLeadDTO } from "../types/lead-form.type";

export const updateLeadApi = async ( leadId: string, payload: UpdateLeadDTO ): Promise<ApiResponse<LeadCommandResponseDTO>> => {

  const res = await httpClient.patch( API_ENDPOINTS.ADMIN.LEADS.UPDATE(leadId), payload );

  return res.data;
};