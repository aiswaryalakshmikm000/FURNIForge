import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateDesignerDTO, DesignerCommandResponseDTO } from "../types/designer-form.type";

export const createDesignerApi = async ( payload: CreateDesignerDTO ): Promise<ApiResponse<DesignerCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.DESIGNERS.CREATE, payload );

  return res.data;
};