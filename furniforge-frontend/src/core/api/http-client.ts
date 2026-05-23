import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { env } from "../config/env";
import { store } from "../../app/store";
import { logout } from "../../features/auth/store/auth.slice";
import { refreshTokenApi } from "../../features/auth/api/refresh-token.api";
import type { ApiErrorResponse } from "../../types/api/api-error.type";

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
}> = [];

const processQueue = (error: unknown = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(null);
  });
  failedQueue = [];
};

export const httpClient = axios.create({
  baseURL: env.API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
});

// ==================== RESPONSE INTERCEPTOR ====================
httpClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError<ApiErrorResponse>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    const errorCode = error.response?.data?.error?.code;

    const REFRESHABLE_ERRORS = [
      "ACCESS_TOKEN_EXPIRED",
      "ACCESS_TOKEN_MISSING",
    ];
    
    if (error.response?.status !== 401 || !REFRESHABLE_ERRORS.includes(errorCode ?? "") || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then(() => httpClient(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      await refreshTokenApi();
      processQueue();
      return httpClient(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError);
      store.dispatch(logout());
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);