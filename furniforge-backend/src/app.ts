import express from "express"
import { corsConfig } from "./infrastructure/config/corsConfig.js"
import { helmetConfig } from "@infrastructure/config/helmetConfig.js"

const app = express()

app.use(express.json())
app.use(corsConfig)
app.use(helmetConfig)

app.get("/health", (req, res) => {
  res.json({ message: "OK" })
})

export default app