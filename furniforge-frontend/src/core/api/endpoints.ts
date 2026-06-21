export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    REFRESH: "/refresh-token",
    LOGOUT: "/logout",
    LOGOUT_ALL: "/logout-all",
    ME: "/me",
    GOOGLE: "/google",
    
    VERIFY_OTP: "/verify-otp",
    RESEND_OTP: "/resend-otp",
    VERIFY_EMAIL: "/verify-email",

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
      DESIGNER_OPTIONS: "/admin/leads/designers-options",
      DELETE: (id: string) => `/admin/leads/${id}`,
      UPDATE: (id: string) => `/admin/leads/${id}`
    },
    
    DESIGNERS: {
      GET_ALL: "/admin/designers",
      BLOCK: (id: string) => `/admin/designers/${id}/block`,
      CREATE: "/admin/designers",
      UPDATE: (id: string) => `/admin/designers/${id}`,
      DELETE: (id: string) => `/admin/designers/${id}`
    },

    DELIVERABLES: {
      GET_ALL: "/admin/deliverables",
      CREATE: "/admin/deliverables",
      UPDATE: (id: string) => `/admin/deliverables/${id}`,
      SOFT_DELETE: (id: string) => `/admin/deliverables/${id}/soft-delete`,
      DELETE: (id: string) => `/admin/deliverables/${id}`,
      TOGGLE_STATUS: (id: string) => `/admin/deliverables/${id}/toggle-status`,
    },

    REQUIREMENT_FIELDS :{
      GET_ALL_DELIVERABLES: "/admin/requirement-fields/deliverables",
      GET_TEMPLATES_BY_DELIVERABLEID: "/admin/requirement-fields/templates",
      GET_TABS_BY_TEMPLATEID: "/admin/requirement-fields/tabs",
      GET_FIELDS_BY_TABID: "/admin/requirement-fields/fields",
    },

    TEMPLATES: {
      CREATE: "/admin/templates",
      UPDATE: (id: string) => `/admin/templates/${id}`,
      SOFT_DELETE: (id: string) => `/admin/templates/${id}/soft-delete`,
      DELETE: (id: string) => `/admin/templates/${id}`,
      TOGGLE_STATUS: (id: string) => `/admin/templates/${id}/status`,
    },
  },

  CLIENT: {

  }
};