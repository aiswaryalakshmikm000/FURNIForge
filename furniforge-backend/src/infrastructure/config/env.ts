import dotenv from "dotenv"
import { z } from "zod"

dotenv.config()

//Schema validation
const envSchema = z.object({
  PORT: z.string().default("5000"),
  NODE_ENV: z.enum(["development", "production", "test"]),

  DATABASE_URL: z.string().optional(),

  FRONTEND_URL: z.string().optional(),
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
}