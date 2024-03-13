const express = require("express");

const { createCandidate } = require("../controllers/candidate-controller");

const candidateRoute = express.Router();

candidateRoute.route("/create").post(createCandidate);

module.exports = candidateRoute;
