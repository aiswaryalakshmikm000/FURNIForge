import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DeleteLeadResponseDTO } from "../../lead/types/delete-lead.type";

export const deleteLeadApi = async ( leadId: string ): Promise<ApiResponse<DeleteLeadResponseDTO>> => {

  const res = await httpClient.delete( API_ENDPOINTS.ADMIN.LEADS.DELETE(leadId));

  return res.data;
};