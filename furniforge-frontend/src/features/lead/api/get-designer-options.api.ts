import { httpClient } from "../../../core/api/http-client";
import { API_ENDPOINTS } from "../../../core/api/endpoints";

import type { ApiResponse } from "../../../types/api/api-response.type";
import type { GetDesignerOptionsResponseDTO } from "../../lead/types/get-designer-options.type";


export const getDesignerOptionsApi = async (): Promise<ApiResponse<GetDesignerOptionsResponseDTO>> => {
    const res = await httpClient.get( API_ENDPOINTS.ADMIN.LEADS.DESIGNER_OPTIONS );

    return res.data;
  };