import app from "./app.js";
import { env } from "@infrastructure/config/env.js";
import "reflect-metadata";
import { loggerInstance } from "@infrastructure/logger/WinstonLogger.js";

const startServer = async () => {
    try {
        app.listen(env.PORT, () => {
            loggerInstance.info(`Server running on port ${env.PORT}`)
        })
    } catch (error) {
        loggerInstance.error("Server start failed", {error})
        process.exit(1)
    }
}

startServer()