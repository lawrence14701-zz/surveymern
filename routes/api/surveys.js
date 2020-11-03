const express = require("express");
const router = express.Router();
const Survey = require("../../models/Survey");
const validateSurvey = require("../../validation/survey");

router.get("/", (req, res) => {
  Survey.find()
    .sort({ date: -1 })
    .then((surveys) => res.json(surveys))
    .catch((err) =>
      res.status(404).json({ noSurveysfound: "No surveys found" })
    );
});

router.post("/", (req, res) => {
  const { errors, isValid } = validateSurvey(req.body);
  if (!isValid) {
    console.log("error");
    return res.status(400).json(errors);
  }
  console.log(req.body);

  const { text, who, id } = req.body;

  const newSurvey = new Survey({
    who,
    text,
    user: id,
  });

  newSurvey.save().then((survey) => res.json(survey));
});

module.exports = router;
