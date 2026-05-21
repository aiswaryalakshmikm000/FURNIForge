export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    REFRESH: "/refresh-token",
    LOGOUT: "/logout",
    LOGOUT_ALL: "/logout-all",
    ME: "/me",

    VERIFY_OTP: "/verify-otp",
    RESEND_OTP: "/resend-otp",

    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_RESET_OTP: "/verify-reset-otp",
    RESEND_FORGOT_PASSWORD: "/resend-forgot-password-otp",
    RESET_PASSWORD: "/reset-password",
  },

  ADMIN: {
    LEADS: {
      GET_ALL: "/admin/leads",
      CREATE: "/admin/leads",
      ASSIGN_DESIGNER: (id: string) => `/admin/leads/${id}/assign-designer`,
    }
  }
};