import { httpClient } from "./http-client";
import { store } from "../../app/store";
import { logout } from "../../features/auth/store/auth.slice";
import { refreshTokenApi } from "../../features/auth/api/refresh-token.api";

let isRefreshing = false;

httpClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return Promise.reject(error); 
      }

      isRefreshing = true;

      try {
        await refreshTokenApi()
        return httpClient(originalRequest);
      } catch (err) {
        store.dispatch(logout())

        window.location.replace("/login");
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);