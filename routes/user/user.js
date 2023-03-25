const express = require("express");

const preferences = require("./preferences");
const viewingHistory = require("./viewingHistory");
const search = require("./search");
const rateMovie = require("./rate");

const recommendMovies = require("../../controllers/user/recommend");

const router = express.Router();

router.route("/recommended").get(recommendMovies);

router.use("/search", search);

router.use("/preferences", preferences);

router.use("/viewing-history", viewingHistory);

router.use("/movie", rateMovie);

module.exports = router;
