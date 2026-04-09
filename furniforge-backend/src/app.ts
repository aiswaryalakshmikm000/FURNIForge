import express from "express"
import { corsConfig } from "./infrastructure/config/corsConfig.js"
import { helmetConfig } from "@infrastructure/config/helmetConfig.js"
import { errorHandlerMiddleware } from "@presentation/api/middlewares/errorHandlerMiddleware.js"
import authRoutes from "@presentation/api/v1/routes/auth/authRoutes.js";
import { SUCCESS_MESSAGES } from "@infrastructure/config/messages.js";
import { morganConfig } from "@infrastructure/config/morgan.js";
import { generalLimiter } from "@infrastructure/security/rateLimiter.js";

const app = express()

app.use(express.json())

app.use(morganConfig)
app.use(corsConfig)
app.use(helmetConfig)
app.use(generalLimiter);

app.use("/api/v1/client", authRoutes)

app.use(errorHandlerMiddleware)

app.get("/health", (req, res) => {
  res.json({ message: SUCCESS_MESSAGES.GENERAL.HEALTH_CHECK })
})

export default app