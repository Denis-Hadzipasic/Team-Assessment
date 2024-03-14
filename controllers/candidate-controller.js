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

const getCandidate = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const candidate = await Candidate.findById(id).populate("evaluator");

  res.json(candidate);
});

const getCandidates = asyncWrapper(async (req, res, next) => {
  const candidates = await Candidate.find({})

  res.json(candidates);
});

const updateCandidate = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { assessmentGrade } = req.body;
  const { id: userID } = req.user;

  const candidate = await Candidate.findById(id);
  if (candidate && candidate.evaluator.includes(userID)) {
    throw new ErrorResponse("User already voted!", 400);
  }

  const updateCandidate = await Candidate.findByIdAndUpdate(
    id,
    { $push: { evaluator: userID, assessmentGrade: assessmentGrade } },
    { new: true }
  );

  if (!updateCandidate) {
    throw new ErrorResponse("Candidate not found!", 404);
  } else {
    res.json(updateCandidate);
  }
});

module.exports = {
  createCandidate,
  getCandidate,
  updateCandidate,
  getCandidates
};
