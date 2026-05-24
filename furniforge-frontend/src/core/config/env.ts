export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL as string,
  NODE_ENV: import.meta.env.MODE,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};