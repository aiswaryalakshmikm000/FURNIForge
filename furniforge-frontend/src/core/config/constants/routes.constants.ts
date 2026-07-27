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
    VERIFY_EMAIL: "verify-email"
  },

  ADMIN: {
    ROOT: "/admin",
    CUSTOMERS: "/admin/customers",
    DESIGNERS: "/admin/designers",
    LEADS: "/admin/leads",
    TECHNICIANS: "/admin/technicians",
    DELIVERABLES: "/admin/deliverables",
    REQUIREMENT_FIELDS: "/admin/requirement-fields",
    MESSAGES: "/admin/messages",
    SETTINGS: "/admin/settings",
  },

  CLIENT: {
    ROOT: "/client",
    REQUIREMENTS: "/client/requirements",
    PROJECTS: "/client/projects",
    SITE_PROGRESS: "/client/site-progress",
    DESIGNS: "/client/designs",
    BOOKINGS: "/client/bookings",
    QUOTATIONS: "/client/quotations",
    PAYMENTS: "/client/payments",
    REFERENCES: "/client/my-references",
    MESSAGES: "/client/messages",
    REVIEWS: "/client/reviews",
    PROFILE: "/client/profile",
  },

  DESIGNER: {
    ROOT: "/designer",
    LEADS: "/designer/leads",
    CUSTOMERS: "/designer/customers",
    CALCULATOR: "/designer/calculator",
    SCHEDULES: "/designer/schedule",
    QUOTATIONS: "/designer/quotations",
    DESIGNS: "/designer/designs",
    PAYMENTS: "/designer/payments",
    PORTFOLIO: "/designer/portfolio",
    MESSAGES: "/designer/messages",
    PROFILE: "/designer/profile"
  },
};