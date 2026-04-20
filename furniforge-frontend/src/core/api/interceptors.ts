import { httpClient } from "./http-client";
import { tokenService } from "../auth/token-service";

let isRefreshing = false;
let queue: any[] = [];

httpClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          queue.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(httpClient(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        const res = await httpClient.post("/refresh-token");

        const newAccessToken = res.data.accessToken;

        tokenService.set(newAccessToken);

        queue.forEach((cb) => cb(newAccessToken));
        queue = [];

        return httpClient(originalRequest);
      } catch (err) {
        tokenService.clear();
        window.location.href = "/login";
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);