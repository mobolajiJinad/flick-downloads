const express = require("express");
const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("../../middleware/error-handler");

const ViewingHistory = require("../../models/ViewingHistory");

const router = express.Router();

router.route("/:movieID/rating").get(async (req, res) => {
  const { movieID } = req.params;
  const { rate } = req.query;

  const movie = await ViewingHistory.findById(movieID);

  if (!movie) {
    throw new CustomError(
      "You haven't watched this movie so you can't watch it",
      StatusCodes.NOT_FOUND
    );
  } else if (!rate) {
    throw new CustomError(
      "Please provide the ratings",
      StatusCodes.BAD_REQUEST
    );
  } else {
    movie.rating = rate;
    movie.save();
  }

  res.status(StatusCodes.OK).json(movie);
});

module.exports = router;
