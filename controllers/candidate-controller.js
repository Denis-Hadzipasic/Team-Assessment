const Candidate = require("../models/candidate-model.js");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncWrapper = require("../utils/asyncWrapper.js");

const createCandidate = asyncWrapper(async (req, res, next) => {
  const { firstName, lastName } = req.body;

  const candidate = await Candidate.create({
    firstName,
    lastName,
  });

  res.status(201).json(candidate);
});

module.exports = { 
    createCandidate 
};
