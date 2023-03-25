const express = require("express");

const { searchActor, searchMovie } = require("../../controllers/user/search");

const router = express.Router();

router.route("/actor").post(searchActor);

router.route("/movie").post(searchMovie);

module.exports = router;
