const mongoose = require("mongoose");
const credentials = require("./credentials");


const url = credentials.mongodb.url;

mongoose.connect(url).then(() => {
  console.log("Connected to womentreeDB");
});

module.exports = mongoose.connection
