// import { httpClient } from "./http-client";
// import { store } from "../../app/store";
// import { logout } from "../../features/auth/store/auth.slice";
// import { refreshTokenApi } from "../../features/auth/api/refresh-token.api";
// import { AxiosError, type InternalAxiosRequestConfig } from "axios";

// let isRefreshing = false;
// let failedQueue: Array<{
//   resolve: (value?: any) => void;
//   reject: (error?: any) => void;
// }> = [];

// const processQueue = (error: any = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(null);
//   });
//   failedQueue = [];
// };

// // ==================== RESPONSE INTERCEPTOR ====================
// httpClient.interceptors.response.use(
//   (response) => response,

//   async (error: AxiosError) => {
//     const originalRequest = error.config as InternalAxiosRequestConfig & {
//       _retry?: boolean;
//     };

//     // Not 401 or already retried
//     if (error.response?.status !== 401 || originalRequest._retry) {
//       return Promise.reject(error);
//     }

//     if (isRefreshing) {
//       return new Promise((resolve, reject) => {
//         failedQueue.push({ resolve, reject });
//       }).then(() => httpClient(originalRequest))
//         .catch((err) => Promise.reject(err));
//     }

//     originalRequest._retry = true;
//     isRefreshing = true;

//     try {
//       await refreshTokenApi();
//       processQueue();
//       return httpClient(originalRequest);
//     } catch (refreshError) {
//       processQueue(refreshError);
//       store.dispatch(logout());
//       return Promise.reject(refreshError);
//     } finally {
//       isRefreshing = false;
//     }
//   }
// );
