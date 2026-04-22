import { httpClient } from "./http-client";
import { store } from "../../app/store";
import { logout } from "../../features/auth/store/auth.slice";

let isRefreshing = false;

httpClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await httpClient.post("/refresh-token", {}, {
          withCredentials: true,
        });
        return httpClient(originalRequest);
      } catch (err) {
        store.dispatch(logout())

        window.location.replace("/login");
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);