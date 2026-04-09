import app from "./app.js";
import { env } from "@infrastructure/config/env.js";
import "reflect-metadata";
import { logger } from "@shared/utils/logger.js";

const startServer = async () => {
    try {
        app.listen(env.PORT, () => {
            logger.info(`Server running on port ${env.PORT}`)
        })
    } catch (error) {
        logger.error(error)
        process.exit(1)
    }
}

startServer()