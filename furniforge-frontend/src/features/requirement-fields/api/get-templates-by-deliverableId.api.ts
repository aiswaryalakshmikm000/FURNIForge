import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetTemplateByDeliverableIdResponseDTO, GetTemplatesByDeliverableIdRequestDTO } from "../types/template.type";

export const getTemplateByDeliverableIdApi = async ( params: GetTemplatesByDeliverableIdRequestDTO ): Promise<ApiResponse<GetTemplateByDeliverableIdResponseDTO>> => {
  const res = await httpClient.get( API_ENDPOINTS.ADMIN.REQUIREMENT_FIELDS.GET_TEMPLATES_BY_DELIVERABLEID, { params } );

  return res.data;
};