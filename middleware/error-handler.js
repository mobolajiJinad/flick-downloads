const { StatusCodes } = require("http-status-codes");

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (err, req, res, next) => {
  let customError = {
    // set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    if (err.keyValue) {
      customError.msg = `Duplicate value entered for ${Object.keys(
        err.keyValue
      )} field, please choose another value`;
      customError.statusCode = StatusCodes.BAD_REQUEST;
    } else {
      customError.msg = "Duplicate value entered, please choose another value";
      customError.statusCode = StatusCodes.BAD_REQUEST;
    }
  }
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

const notFound = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).json({ msg: "Route does not exist" });

module.exports = { CustomError, errorHandler, notFound };
