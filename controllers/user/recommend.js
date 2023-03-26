const Preference = require("../../models/Preference");
const ViewingHistory = require("../../models/ViewingHistory");

const { StatusCodes } = require("http-status-codes");
const getRecommendations = require("../../utils/recommendMovies");

const recommendMovies = async (req, res, next) => {
  const { userID } = req.user;

  try {
    const userPreferences = await Preference.findOne({ preferredBy: userID });
    const viewingHistory = await ViewingHistory.find({ viewedBy: userID })
      .sort({ rating: -1 })
      .where("rating")
      .gte(3);

    const actorsByGenre = groupByGenre(userPreferences.actors);
    const moviesByGenre = groupByGenre(userPreferences.movies);

    const genres = [...new Set(viewingHistory.map((item) => item.genre))];
    const similarMoviesPromises = genres.map(async (genreId) => {
      const genreActors = actorsByGenre[genreId] || [];
      const genreMovies = moviesByGenre[genreId] || [];
      const genreViewingHistory = viewingHistory.filter(
        (item) => item.genre === genreId
      );

      const similarMovies = await getRecommendations(
        genreId,
        genreActors,
        genreMovies
      );

      return similarMovies.slice(0, 10);
    });

    const similarMovies = await Promise.all(similarMoviesPromises);
    const flattenedMovies = similarMovies.flat();

    res.status(StatusCodes.OK).json(flattenedMovies);
  } catch (error) {
    next(error);
  }
};

const groupByGenre = (items) => {
  return items.reduce((acc, item) => {
    if (!acc[item.genreId]) {
      acc[item.genreId] = [];
    }
    acc[item.genreId].push(item);
    return acc;
  }, {});
};

module.exports = recommendMovies;
