const express = require("express");

const {
  createUser,
  login,
  logout,
} = require("../controllers/user-controller.js");

const userRouter = express.Router();

userRouter.route("/create").post(createUser);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);

module.exports = userRouter;
