import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DesignerCommandResponseDTO } from "../types/designer-form.type";

export const toggleDesignerBlockApi = async ( designerId: string ): Promise<ApiResponse<DesignerCommandResponseDTO>> => {
  const response = await httpClient.patch( API_ENDPOINTS.ADMIN.DESIGNERS.BLOCK(designerId) );

  return response.data;
};

