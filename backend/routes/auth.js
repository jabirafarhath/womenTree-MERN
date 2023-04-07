const express = require("express");
const router = express.Router();
const passport = require("passport");
const connection = require("../config/db");
const { connect } = require("mongoose");

//login with google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

//callback route for google to redirect
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/user",
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success", (req, res) => {
  // console.log(req.user);
  if (req.user) {
    res.status(200).send({
      success: true,
      message: "Authentication Successfull",
      user: req.user,
    });
  } else {
    res.status(401).json("user logged out");
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Authentication Failed",
  });
});

router.get("/session", (req, res) => {
  if (req.session.passport) {
    // console.log(req.session);
    res.status(200).json(req.session.passport.user);
  } else {
    res.status(401).json("User logged out");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("http://localhost:3000");
    }
  });
});
module.exports = router;
