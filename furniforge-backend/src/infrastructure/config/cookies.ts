import { env } from "./env.js";
import { Response } from "express";

export const REFRESH_TOKEN_EXPIRES_DAYS  = Number (env.REFRESH_TOKEN_EXPIRES_DAYS) ?? 7
export const ACCESS_TOKEN_EXPIRES_DAYS  = Number (env.ACCESS_TOKEN_EXPIRES_DAYS) ?? 15

export const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: REFRESH_TOKEN_EXPIRES_DAYS * 24 * 60 * 60 * 1000,
};

export const ACCESS_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: ACCESS_TOKEN_EXPIRES_DAYS * 60  * 1000,
};

export const setRefreshTokenCookie = (res: Response, token: string) => {
  res.cookie("refreshToken", token, REFRESH_COOKIE_OPTIONS);
};

export const clearRefreshTokenCookie = (res: Response) => {
  res.clearCookie("refreshToken", REFRESH_COOKIE_OPTIONS)
}

export const setAccessTokenCookie = (res: Response, token: string) => {
  res.cookie("accessToken", token, ACCESS_COOKIE_OPTIONS);
};

export const clearAccessTokenCookie = (res: Response) => {
  res.clearCookie("accessToken", ACCESS_COOKIE_OPTIONS)
}