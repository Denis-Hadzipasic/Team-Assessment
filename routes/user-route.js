const express = require("express");

const { createUser } = require("../controllers/user-controller.js");


const userRouter = express.Router();

userRouter.route("/create").post(createUser);

module.exports = userRouter;