const { StatusCodes } = require("http-status-codes");

const { CustomError } = require("../../middleware/error-handler");
const ViewingHistory = require("../../models/ViewingHistory");

const getViewingHistory = async (req, res) => {
  const { userID } = req.user;
  const viewingHistory = await ViewingHistory.find({ viewedBy: userID });

  if (!viewingHistory) {
    throw new CustomError(
      "You haven't added any movies",
      StatusCodes.NOT_FOUND
    );
  }

  res.status(StatusCodes.OK).json({ movies: viewingHistory });
};

const addViewingHistory = async (req, res, next) => {
  const { userID } = req.user;
  const { movies } = req.body;

  if (!movies) {
    throw new CustomError(
      "Movies field cannot be undefined",
      StatusCodes.BAD_REQUEST
    );
  }

  try {
    const moviePromises = movies.map((movie) =>
      fetch(
        `https://api.tmdb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
      ).then((res) => res.json())
    );
    const movieResponses = await Promise.all(moviePromises);

    const viewingHistoryDocs = movieResponses
      .filter((response) => response.results.length > 0)
      .map((response) => {
        const movie = response.results[0];
        return {
          _id: movie.id,
          viewedBy: userID,
          title: movie.original_title,
          genre: movie.genre_ids,
          overview: movie.overview,
          releaseDate: movie.release_date,
        };
      });

    const result = await ViewingHistory.bulkWrite(
      viewingHistoryDocs.map((doc) => ({
        insertOne: {
          document: doc,
        },
      }))
    );

    const addedDocs = await ViewingHistory.find({
      _id: {
        $in: Object.values(result.insertedIds),
      },
    });

    res.status(StatusCodes.CREATED).json(addedDocs);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getViewingHistory,
  addViewingHistory,
};
