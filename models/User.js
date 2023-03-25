const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Provide a username"],
    match: [/^[a-zA-Z0-9_-]+$/, "Enter a valid username"],
    minLength: 4,
    maxLength: 12,
    unique: [true, "Username have been used."],
  },
  email: {
    type: String,
    required: [true, "Provide an email address."],
    unique: [true, "Email have been registered."],
    // match: [
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0,9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   "Please provide a valid email",
    // ],
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
    match: [
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
      "Make sure password is between 7 to 15 characters and contains at least one numeric digit and a special character",
    ],
  },
});

userSchema.methods.comparePassword = function (inputtedPassword) {
  return bcrypt.compare(inputtedPassword, this.password);
};

userSchema.methods.generateJWT = function (username) {
  return jwt.sign({ userID: this._id, username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
});

module.exports = mongoose.model("User", userSchema);
