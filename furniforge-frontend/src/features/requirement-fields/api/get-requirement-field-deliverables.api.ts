import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetRequirementFieldDeliverablesRequestDTO, GetRequirementFieldDeliverablesResponseDTO } from "../types/deliverable.type";

export const getRequirementFieldDeliverablesApi = async ( params: GetRequirementFieldDeliverablesRequestDTO ): Promise<ApiResponse<GetRequirementFieldDeliverablesResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.REQUIREMENT_FIELDS.GET_ALL_DELIVERABLES, { params } );

  return res.data;
};