const _ = require("lodash");

const { CustomError } = require("../middleware/error-handler");

const getRecommendations = async (genreId, genreActors, genreMovies) => {
  const queryParams = new URLSearchParams({
    api_key: process.env.API_KEY,
    language: "en-US",
    page: 1,
    with_genres: genreId,
    with_cast: genreActors.map((actor) => actor.tmdbId).join(","),
    query: genreMovies.map((movie) => movie.name).join(" "),
    sort_by: "popularity.desc",
  });

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?${queryParams}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error fetching recommendations");
    }

    const results = await response.json();

    const recommendedMovies = results.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        genres: result.genre_ids,
        overview: result.overview,
        rating: result.vote_average,
      };
    });

    return recommendedMovies;
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
};

module.exports = getRecommendations;
