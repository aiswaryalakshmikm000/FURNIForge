// import axios from "axios";
// import { env } from "../config/env";

// export const httpClient = axios.create({
//   baseURL: env.API_BASE_URL, 
//   withCredentials: true, 
//   timeout: 15000,
// });


import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { env } from "../config/env";
import { store } from "../../app/store";
import { logout } from "../../features/auth/store/auth.slice";

// We will import refreshTokenApi here
import { refreshTokenApi } from "../../features/auth/api/refresh-token.api";

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
}> = [];

const processQueue = (error: any = null) => {
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

  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Not 401 or already retried
    if (error.response?.status !== 401 || originalRequest._retry) {
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
      // window.location.replace("/login"); // Optional
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);