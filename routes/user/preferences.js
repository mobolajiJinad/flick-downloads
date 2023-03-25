const express = require("express");

const {
  getPreferences,
  addGenrePreference,
  addActorsPreference,
  addMoviesPreference,
} = require("../../controllers/user/preferences");

const router = express.Router();

router.route("").get(getPreferences);

router.route("/add-genres").post(addGenrePreference);

router.route("/add-actors").post(addActorsPreference);

router.route("/add-movies").post(addMoviesPreference);

module.exports = router;
