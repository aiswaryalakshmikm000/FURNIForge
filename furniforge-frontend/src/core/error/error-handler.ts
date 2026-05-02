import { AppError } from "./app-error";
import { AxiosError } from "axios";
import type { ApiErrorResponse } from "../../types/api/api-error.type";
import { ERROR_MESSAGES } from "../config/constants/messages.constants";

export const normalizeError = (error: unknown): AppError => {
  // Axios error (from backend)
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError<ApiErrorResponse>;

    return new AppError(
      axiosError.response?.data?.message || "API Error",
      axiosError.response?.data?.error?.code,
      axiosError.response?.status
    );
  }

  // JS runtime error
  if (error instanceof Error) {
    return new AppError(error.message);
  }

  // Unknown
  return new AppError(ERROR_MESSAGES.GENERIC.ERROR);
};