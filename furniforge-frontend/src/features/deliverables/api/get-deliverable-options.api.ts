import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetDeliverableOptionsResponseDTO } from "../types/deliverable-option.type";


export const getDeliverableOptionsApi = async (): Promise<ApiResponse<GetDeliverableOptionsResponseDTO>> => {

  const res = await httpClient.get( API_ENDPOINTS.ADMIN.DELIVERABLES.OPTIONS );

  return res.data;
};