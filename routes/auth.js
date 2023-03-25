const express = require("express");

const { signUpController, logInController } = require("../controllers/auth");

const router = express.Router();

router.route("/signup").post(signUpController);

router.route("/login").post(logInController);

module.exports = router;
