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

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiErrorResponse;

    return apiError?.message || "Something went wrong";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
};

export type AppAxiosError = AxiosError<ApiErrorResponse>;