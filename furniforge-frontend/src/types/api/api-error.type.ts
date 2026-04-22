import { AxiosError } from "axios";

export interface ApiErrorResponse<TDetails = unknown> {
  success: false;
  message: string;
  error: {
    code: string;
    details?: TDetails;
  };
  meta?: unknown;
};

export const getErrorMessage = (error: any): string => {
  const apiError = error?.response?.data as ApiErrorResponse;

  if (apiError?.message) return apiError.message;
  return "Something went wrong";
};

export type AppAxiosError = AxiosError<ApiErrorResponse>;