const mongoose = require("mongoose");

const prefrenceSchema = new mongoose.Schema({
  preferredBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
  genres: {
    type: [{ _id: { type: Number }, name: { type: String } }],
  },
  actors: [String],
  movies: [String],
});

module.exports = mongoose.model("Preference", prefrenceSchema);
