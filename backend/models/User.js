const mongoose = require("mongoose");

const workSchema = mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  durationInMonths: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    default: "Work description",
  },
});

const educationSchema = new mongoose.Schema({
  qualification: {
    type: String,
    enum: ["Primary School", "High School", "Under Graduate", "Post Graduate"],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const certificationSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  year:{
    type:Number,
    min:1995,
    max:2023,
  }
})
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
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
  bio: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "username",
  },
  image:{
    type:String,
    required:true
  },
  work: {
    type: [workSchema],
    default:[]

  },
  education: {
    type: [educationSchema],
    default:[]

  },
  certifications:{
    type:[certificationSchema],
    default:[]
  },
  languages:{
    type:[{
      type:String,
      required:true
    }],
    default:[]
  },
  location:{
    type:String,
    default:""
  },
  ratingOn10:{
    type:Number,
    default:0
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
