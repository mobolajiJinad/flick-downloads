const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const { CustomError } = require("./error-handler");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("Authentication Invalid", StatusCodes.UNAUTHORIZED);
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.userID, username: payload.username };

    next();
  } catch (err) {
    throw new CustomError("Authentication Invalid", StatusCodes.UNAUTHORIZED);
  }
};

module.exports = authenticate;
