const User = require("../models/user-model.js");
const ErrorResponse = require("../utils/errorResponse.js");
const asyncWrapper = require("../utils/asyncWrapper.js");

const createUser = asyncWrapper(async (req, res, next) => {
  const { logInID, password } = req.body;

  const user = await User.create({
    logInID,
    password
  })

  res.status(201).json(user)
});


module.exports = {
  createUser,
};
