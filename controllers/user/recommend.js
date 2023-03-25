const _ = require("lodash");

const Preference = require("../../models/Preference");
const ViewingHistory = require("../../models/ViewingHistory");
const getSimilarMovies = require("../../utils/recommendMovies");
const { StatusCodes } = require("http-status-codes");

const recommendMovies = async (req, res) => {
  const { userID } = req.user;

  const userPreferences = await Preference.findOne({ preferredBy: userID });
  const viewingHistory = await ViewingHistory.find({ viewedBy: userID });

  const likedGenres = _.map(userPreferences.genres, "_id");
  const likedActors = userPreferences.actors;
  const likedMovies = userPreferences.movies.concat(
    _.map(viewingHistory, "title")
  );

  const similarMovies = await getSimilarMovies(
    likedGenres,
    likedActors,
    likedMovies
  );

  const result = _.map(similarMovies, "title").slice(0, 10);
  res.status(StatusCodes.OK).json(result);
};

module.exports = recommendMovies;
