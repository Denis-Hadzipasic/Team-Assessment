require("dotenv/config")
require("./db.js")

const errorHandler = require("./middlewares/errorHandler.js")

const express = require("express")
const app = express()
const PORT = process.env.PORT

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Website listening on http://localhost:${PORT}`)
})
