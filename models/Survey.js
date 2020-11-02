const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  economy: {
    type: Boolean,
    required: true,
  },
  racial: {
    type: Boolean,
    required: true,
  },
  diplomacy: {
    type: Boolean,
    required: true,
  },
  environment: {
    type: Boolean,
    required: true,
  },
  healthcare: {
    type: Boolean,
    required: true,
  },
  security: {
    type: Boolean,
    required: true,
  },
  covid: {
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

module.exports = Tweet = mongoose.model("tweet", TweetSchema);
