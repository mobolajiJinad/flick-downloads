const { StatusCodes } = require("http-status-codes");

const { CustomError } = require("../middleware/error-handler");
const User = require("../models/User");

const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({ username, email, password });

  const token = user.generateJWT(username);
  res.status(StatusCodes.CREATED).json({ user: { username }, token });
};

const logInController = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    throw new CustomError("Provide all credentials", StatusCodes.BAD_REQUEST);
  }

  let query;
  if (/^\S+@\S+\.\S+$/.test(usernameOrEmail)) {
    // Input looks like an email address
    query = { email: usernameOrEmail };
  } else {
    // Input looks like a username
    query = { username: usernameOrEmail };
  }

  const user = await User.findOne(query);
  if (!user) {
    throw new CustomError("Invalid credentials", StatusCodes.BAD_REQUEST);
  }

  const isPassword = user.comparePassword(password);
  if (!isPassword) {
    throw new CustomError("Invalid credentials", StatusCodes.BAD_REQUEST);
  }

  const username = user.username;

  const token = user.generateJWT(username);
  res.status(StatusCodes.OK).json({ user: { username }, token });
};

module.exports = {
  signUpController,
  logInController,
};
