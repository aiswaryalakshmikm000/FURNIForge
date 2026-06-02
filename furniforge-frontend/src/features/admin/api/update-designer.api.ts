import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { DesignerCommandResponseDTO, UpdateDesignerDTO } from "../types/designer-form.type";

export const updateDesignerApi = async ( designerId: string, payload: UpdateDesignerDTO ): Promise<ApiResponse<DesignerCommandResponseDTO>> => {
  const res = await httpClient.patch( API_ENDPOINTS.ADMIN.DESIGNERS.UPDATE(designerId), payload );

  return res.data;
};