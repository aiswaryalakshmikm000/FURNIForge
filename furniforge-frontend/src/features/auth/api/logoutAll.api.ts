import type { ApiResponse } from "../../../types/api/api-response.type";
import { httpClient } from "../../../core/api/http-client";

export const logoutAllApi = async (): Promise<ApiResponse<null>> => {
  const res = await httpClient.post("/logout-all");
  return res.data;
};