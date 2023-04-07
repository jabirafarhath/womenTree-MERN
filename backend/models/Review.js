const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  reviewBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reviewTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;
