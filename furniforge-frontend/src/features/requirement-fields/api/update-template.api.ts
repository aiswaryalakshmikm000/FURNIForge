import { API_ENDPOINTS } from "../../../core/api/endpoints";
import { httpClient } from "../../../core/api/http-client";
import type { ApiResponse } from "../../../types/api/api-response.type";
import type { TemplateCommandResponseDTO, UpdateTemplateDTO } from "../types/template-command.type";

export const updateTemplateApi = async ( templateId: string, payload: UpdateTemplateDTO ): Promise<ApiResponse<TemplateCommandResponseDTO>> => {
  const res = await httpClient.put( API_ENDPOINTS.ADMIN.TEMPLATES.UPDATE(templateId), payload );

  return res.data;
};