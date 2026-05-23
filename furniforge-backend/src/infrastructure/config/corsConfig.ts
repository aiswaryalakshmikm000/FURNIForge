import cors from "cors"
import { env } from "../../infrastructure/config/env"

export const corsConfig = cors({
    origin: env.CORS.ORIGIN,
    credentials: true
})
