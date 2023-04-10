const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const credentials = require("./config/credentials");
const User = require("./models/User");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
// const session = require('cookie-session')

require("./config/db");
require("./config/passport");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "PATCH","DELETE"],
    credentials: true,
    optionSuccessStatus:200,
  })
);
app.use(
  session({
    name: "user-session",
    secret: credentials.session.secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: credentials.mongodb.url,
      ttl: 1000 * 60 * 60,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/getUsers", (req, res) => {
  User.find().then((foundUsers) => {
    res.json(foundUsers);
  });
});

app.get('/getuser/:userId',(req,res)=>{
  const userId = req.params.userId
  User.findById(userId).then((foundUser)=>{
    // console.log(foundUser);
    res.status(200).json(foundUser);
  }).catch((err)=>{
    res.status(500).json(err)
  })
})

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
