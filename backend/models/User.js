const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default:0
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["Job Seeker", "Job Provider"],
    default: "Job Seeker",
  },
  googleId: {
    type: String,
    required: true,
  },
  bio:{
    type:String,
    default:"Tell us about yourself"
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
