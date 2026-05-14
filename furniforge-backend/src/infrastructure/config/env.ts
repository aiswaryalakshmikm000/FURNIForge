import dotenv from "dotenv"
import { z } from "zod"

dotenv.config()

//Schema validation
const envSchema = z.object({
  PORT: z.string().default("5000"),
  NODE_ENV: z.enum(["development", "production", "test"]),

  DATABASE_URL: z.string().optional(),
  FRONTEND_URL: z.string().optional(),

  BCRYPT_SALT_ROUNDS: z.string().default("10"),

  BREVO_URL: z.string().url("Invalid Brevo API URL"),
  BREVO_API_KEY: z.string().min(1, "BREVO_API_KEY is required."),
  BREVO_SENDER_EMAIL: z.string().email("Invalid sender email."),
  BREVO_APP_NAME: z.string().min(1, "APP_NAME is required."),

  OTP_EXPIRY: z.string().default("300"),
  OTP_RESEND_DELAY: z.string().default("30"),
  OTP_MAX_ATTEMPTS: z.string().default("3"),

  RATE_LIMIT_WINDOW_MS: z.string().default("900000"), // 15 min
  RATE_LIMIT_MAX: z.string().default("100"),

  AUTH_RATE_LIMIT_WINDOW_MS: z.string().default("900000"),
  AUTH_RATE_LIMIT_MAX: z.string().default("5"),

  OTP_RATE_LIMIT_WINDOW_MS: z.string().default("600000"), 
  OTP_RATE_LIMIT_MAX: z.string().default("5"),

  JWT_ACCESS_SECRET: z.string().min(1, "JWT_ACCESS_SECRET is required"),
  JWT_ACCESS_EXPIRY: z.string().default("15"),

  JWT_REFRESH_SECRET: z.string().min(1, "JWT_REFRESH_SECRET is required"),
  JWT_REFRESH_EXPIRY: z.string().default("7d"),

  JWT_RESET_SECRET: z.string().min(1, "JWT_RESET_SECRET is required"),
  JWT_RESET_EXPIRY: z.string().default("10m"),

  REFRESH_TOKEN_EXPIRES_DAYS: z.string().default("7"),
  ACCESS_TOKEN_EXPIRES_DAYS: z.string().default("15"),

  LOG_MAX_FILES: z.string().default("14d"),
})

//parse and validate
const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error("Invalid environment variables")
  parsedEnv.error.issues.forEach((err) => {
    console.error(`${err.path.join(".")}: ${err.message}`)
  })
  process.exit(1)
}

//export clean typed config
export const env = {
  PORT: Number(parsedEnv.data.PORT),
  NODE_ENV: parsedEnv.data.NODE_ENV,

  DATABASE_URL: parsedEnv.data.DATABASE_URL,

  CORS: {
    ORIGIN: parsedEnv.data.FRONTEND_URL,
  },

  BCRYPT_SALT_ROUNDS: Number(parsedEnv.data.BCRYPT_SALT_ROUNDS),

  BREVO: {
    URL: parsedEnv.data.BREVO_URL,
    API_KEY: parsedEnv.data.BREVO_API_KEY,
    SENDER_EMAIL: parsedEnv.data.BREVO_SENDER_EMAIL,
    APP_NAME: parsedEnv.data.BREVO_APP_NAME
  },

  OTP: {
  EXPIRY: Number(parsedEnv.data.OTP_EXPIRY),          
  RESEND_DELAY: Number(parsedEnv.data.OTP_RESEND_DELAY), 
  MAX_ATTEMPTS: Number(parsedEnv.data.OTP_MAX_ATTEMPTS),
  },

  RATE_LIMIT: {
    WINDOW_MS: Number(parsedEnv.data.RATE_LIMIT_WINDOW_MS),
    MAX: Number(parsedEnv.data.RATE_LIMIT_MAX),
  },

  AUTH_RATE_LIMIT: {
    WINDOW_MS: Number(parsedEnv.data.AUTH_RATE_LIMIT_WINDOW_MS),
    MAX: Number(parsedEnv.data.AUTH_RATE_LIMIT_MAX),
  },

  OTP_RATE_LIMIT: {
    WINDOW_MS: Number(parsedEnv.data.OTP_RATE_LIMIT_WINDOW_MS),
    MAX: Number(parsedEnv.data.OTP_RATE_LIMIT_MAX),
  },
  
  JWT: {
    ACCESS_SECRET: parsedEnv.data.JWT_ACCESS_SECRET,
    ACCESS_EXPIRY: parsedEnv.data.JWT_ACCESS_EXPIRY,
    REFRESH_SECRET: parsedEnv.data.JWT_REFRESH_SECRET,
    REFRESH_EXPIRY: parsedEnv.data.JWT_REFRESH_EXPIRY,
    RESET_SECRET: parsedEnv.data.JWT_RESET_SECRET,
    RESET_EXPIRY: parsedEnv.data.JWT_RESET_EXPIRY,
  },

  REFRESH_TOKEN_EXPIRES_DAYS: parsedEnv.data.REFRESH_TOKEN_EXPIRES_DAYS,
  ACCESS_TOKEN_EXPIRES_DAYS: parsedEnv.data.ACCESS_TOKEN_EXPIRES_DAYS,

  LOG_MAX_FILES: parsedEnv.data.LOG_MAX_FILES,
}