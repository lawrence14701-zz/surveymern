const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      newUser.save().then((user) => res.json(user));
    }
  });
});

module.exports = router;
