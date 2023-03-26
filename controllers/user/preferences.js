const { StatusCodes } = require("http-status-codes");

const { CustomError } = require("../../middleware/error-handler");
const Preference = require("../../models/Preference");
const getValidGenresWithID = require("../../utils/validGenresWithID");
const getUniqueValuesInArray = require("../../utils/uniqueVauesInArray");

const getPreferences = async (req, res) => {
  const { userID } = req.user;

  const preference = await Preference.findOne({ preferredBy: userID }).select(
    "-_id"
  );

  if (!preference) {
    throw new CustomError(
      "No information to display yet",
      StatusCodes.NOT_FOUND
    );
  }

  res.status(StatusCodes.OK).json(preference);
};

const addGenrePreference = async (req, res) => {
  const genres = req.body.genres;
  const { userID } = req.user;

  if (!genres) {
    throw new CustomError(
      "Please provide valid values for the genres field",
      StatusCodes.BAD_REQUEST
    );
  }

  let preference = await Preference.findOne({ preferredBy: userID });

  let validGenresWithID = getValidGenresWithID(genres);

  if (!preference) {
    preference = new Preference({
      preferredBy: userID,
      genres: validGenresWithID,
    });
  } else {
    validGenresWithID = validGenresWithID.filter(
      (genre) =>
        !preference.genres.some(
          (preferenceGenre) => preferenceGenre._id === genre._id
        )
    );
    preference.genres.push(...validGenresWithID);
  }

  await preference.save();

  res.status(StatusCodes.CREATED).json(preference.genres);
};

const addActorsPreference = async (req, res) => {
  const { actors } = req.body;
  const { userID } = req.user;

  if (!actors) {
    throw new CustomError(
      "Please provide valid values for the actors field",
      StatusCodes.BAD_REQUEST
    );
  }

  let preference = await Preference.findOne({ preferredBy: userID });

  if (!preference) {
    preference = new Preference({
      preferredBy: userID,
      actors: actors,
    });
  } else {
    const uniqueActors = getUniqueValuesInArray(preference.actors, actors);

    preference.actors = uniqueActors;
  }

  await preference.save();

  res.status(StatusCodes.CREATED).json(preference.actors);
};

const addMoviesPreference = async (req, res) => {
  const { userID } = req.user;
  const { movies } = req.body;

  if (!movies) {
    throw new CustomError(
      "Please provide valid values for the movies field",
      StatusCodes.BAD_REQUEST
    );
  }

  let preference = await Preference.findOne({ preferredBy: userID });

  if (!preference) {
    preference = new Preference({
      preferredBy: userID,
      movies: movies,
    });
  } else {
    const uniqueMovies = getUniqueValuesInArray(preference.movies, movies);

    preference.movies = uniqueMovies;
  }

  await preference.save();

  res.status(StatusCodes.CREATED).json(preference.movies);
};

module.exports = {
  getPreferences,
  addGenrePreference,
  addActorsPreference,
  addMoviesPreference,
};
