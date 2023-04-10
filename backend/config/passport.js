const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const User = require("../models/User");
const credentials = require("./credentials");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the strategy
      callbackURL: "http://localhost:3001/auth/google/callback",
      clientID: credentials.google.clientId,
      clientSecret: credentials.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((currentUser) => {
          if (currentUser) {
            //already have user
            done(null, currentUser);
          } else {
            //create new user
            new User({
              name: profile.displayName,
              googleId: profile.id,
              email: profile._json.email,
              image: profile._json.picture,
            })
              .save()
              .then((newUser) => {
                done(null, newUser);
              });
          }
        })
        .then(() => {
          console.log("Logged In");
        });
    }
  )
);
