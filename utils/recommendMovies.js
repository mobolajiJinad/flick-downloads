const _ = require("lodash");

const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("../middleware/error-handler");

const getRecommendations = async (likedGenres, likedActors, likedMovies) => {
  const queryParams = new URLSearchParams({
    api_key: process.env.API_KEY,
    language: "en-US",
    page: 1,
    with_genres: likedGenres.join("|"),
    with_cast: likedActors.join("|"),
    query: likedMovies.join(" "),
    sort_by: "vote_average.desc",
  });
  console.log(queryParams);
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?${queryParams}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.status !== 200) {
    throw new CustomError(
      "Error fetching recommendations",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  const similarMovies = _.map(data.results, (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      genres: movie.genre_ids,
      overview: movie.overview,
      rating: movie.vote_average,
    };
  });

  return similarMovies;
};

module.exports = getRecommendations;
