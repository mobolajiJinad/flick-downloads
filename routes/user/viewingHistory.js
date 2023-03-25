const express = require("express");

const {
  getViewingHistory,
  addViewingHistory,
} = require("../../controllers/user/viewingHistory");

const router = express.Router();

router.route("/").get(getViewingHistory);

router.route("/add").post(addViewingHistory);

module.exports = router;
