import axios from "axios";
import { tokenService } from "../auth/token-service";
import { env } from "../config/env";

export const httpClient = axios.create({
  baseURL: env.API_BASE_URL, 
  withCredentials: true, 
});

//attach access token
httpClient.interceptors.request.use((config) => {
  const token = tokenService.get();

  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
})