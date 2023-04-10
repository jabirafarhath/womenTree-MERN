const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");

router.put("/:userId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => {
      result
        ? res.status(200).send("updated successfully")
        : res.status(400).send("couldn't find data to update");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete", (req, res) => {
  const userId = req.user.id;
  User.findByIdAndDelete(userId)
    .then((response) => {
      res.status(200).send("user deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
