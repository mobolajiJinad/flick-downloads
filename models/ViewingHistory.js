const mongoose = require("mongoose");

const viewingHistorySchema = new mongoose.Schema({
  _id: Number,
  viewedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
  title: {
    type: String,
    required: [true, "Name of movie cannot be undefined"],
  },
  genre: [Number],
  overview: String,
  releaseDate: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 5,
    required: true,
  },
});

module.exports = mongoose.model("ViewingHistory", viewingHistorySchema);
