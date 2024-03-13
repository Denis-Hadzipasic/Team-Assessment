require("dotenv/config")
require("./db.js")

const express = require("express")
const app = express()
const PORT = process.env.PORT

const errorHandler = require("./middlewares/errorHandler.js")
const userRouter = require("./routes/user-route.js")


app.use(express.json())


app.use("/user", userRouter)


app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Website listening on http://localhost:${PORT}`)
})
