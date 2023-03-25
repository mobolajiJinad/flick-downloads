const { StatusCodes } = require("http-status-codes");

const { CustomError } = require("../../middleware/error-handler");

const searchActor = async (req, res) => {
  const { actor } = req.body;

  if (!actor) {
    throw new CustomError("Actor can't be undefined", StatusCodes.BAD_REQUEST);
  }

  const actorData = await fetch(
    `https://api.tmdb.org/3/search/person?api_key=${process.env.API_KEY}&query=${actor}`
  ).then((data) => data.json());

  const results = actorData.results.map((output) => ({
    name: output.name,
    gender: output.gender === 0 ? "Male" : "Female",
    popular_movies: output.known_for.map((movie) => ({
      title: movie.title,
      original_title: movie.original_title,
      overview: movie.overview,
      genres: movie.genre,
      release_date: movie.release_date,
    })),
  }));

  res.status(StatusCodes.OK).json(results);
};

const searchMovie = async (req, res) => {
  const { movie } = req.body;

  if (!movie) {
    throw new CustomError("Movie can't be undefined", StatusCodes.BAD_REQUEST);
  }

  const movieData = await fetch(
    `https://api.tmdb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
  ).then((data) => data.json());

  const results = movieData.results.map((output) => ({
    name: output.original_title,
    overview: output.overview,
    release_date: output.release_date,
  }));

  res.status(StatusCodes.OK).json(results);
};

module.exports = {
  searchActor,
  searchMovie,
};
