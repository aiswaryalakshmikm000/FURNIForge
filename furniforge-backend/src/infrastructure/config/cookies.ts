import { env } from "./env.js";

export const REFRESH_TOKEN_EXPIRES_DAYS  = Number (env.REFRESH_TOKEN_EXPIRES_DAYS) ?? 7

export const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 * 1000,
};