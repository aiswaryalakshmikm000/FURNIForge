export const APP_ROUTES = {
  COMMON: {
    ROOT: "/",
    NOT_FOUND: "*",
    ABOUT: "/about",
    OUR_WORK: "/our-work",
    HOW_IT_WORKS: "/how-it-works"
  },

  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_OTP: "/verify-otp",
    VERIFY_RESET_OTP: "/verify-reset-otp",
    RESET_PASSWORD: "/reset-password",
  },

  ADMIN: {
    ROOT: "/admin",
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
  },

  CLIENT: {
    ROOT: "/",
    HOME: "/home",
    DASHBOARD: "/dashboard",
  },

  DESIGNER: {
    ROOT: "/designer",
    DASHBOARD: "/designer/dashboard",
  },
};