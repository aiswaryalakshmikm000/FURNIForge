import express from "express"
import { corsConfig } from "./infrastructure/config/corsConfig.js"
import { helmetConfig } from "./infrastructure/config/helmetConfig.js"
import { errorHandlerMiddleware } from "./presentation/api/middlewares/errorHandlerMiddleware.js"
import authRoutes from "./presentation/api/v1/routes/auth/authRoutes.js";
import adminRoutes from "./presentation/api/v1/routes/admin/leadRoutes.js"
import { SUCCESS_MESSAGES } from "./infrastructure/config/messages.js";
import { morganConfig } from "./infrastructure/config/morganConfig.js";
import { cookieConfig } from "./infrastructure/config/cookieConfig.js";

const app = express()

app.use(express.json())

app.use(morganConfig)
app.use(corsConfig)
app.use(helmetConfig)
app.use(cookieConfig)

app.use("/api/v1", authRoutes)
app.use("/api/v1/admin", adminRoutes)

app.get("/health", (req, res) => {
  res.json({ message: SUCCESS_MESSAGES.GENERAL.HEALTH_CHECK })
})

app.use(errorHandlerMiddleware)

export default app