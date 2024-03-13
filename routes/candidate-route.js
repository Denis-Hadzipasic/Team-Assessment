const express = require("express");

const {
  createCandidate,
  getCandidate,
  updateCandidate,
} = require("../controllers/candidate-controller");

const { authenticate } = require("../middlewares/authentication.js");


const candidateRoute = express.Router();

candidateRoute.route("/create").post(createCandidate);
candidateRoute.route("/:id").get(getCandidate);
candidateRoute.route("/update/:id").put(authenticate, updateCandidate)

module.exports = candidateRoute;
