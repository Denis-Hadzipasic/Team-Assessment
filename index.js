require("dotenv/config");
require("./db.js");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT;

const errorHandler = require("./middlewares/errorHandler.js");
const userRouter = require("./routes/user-route.js");
const candidateRoute = require("./routes/candidate-route.js");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/user", userRouter);
app.use("/candidate", candidateRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Website listening on http://localhost:${PORT}`);
});
