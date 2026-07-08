import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { CreateTemplateDTO, TemplateCommandResponseDTO } from "../types/template-command.type";


export const createTemplateApi = async ( payload: CreateTemplateDTO ): Promise<ApiResponse<TemplateCommandResponseDTO>> => {
  const res = await httpClient.post( API_ENDPOINTS.ADMIN.TEMPLATES.CREATE, payload );
  
  return res.data;
};