const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  email: {
    type: String,
    ref: "users",
  },
  who: {
    type: Boolean,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Survey = mongoose.model("survets", SurveySchema);
