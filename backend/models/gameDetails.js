/* eslint-disable no-undef */
const mongoose = require("mongoose");

const gameDetailsSchema = mongoose.Schema(
  {
    gameData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
    },
    userDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    tables: [[Number]],
    lottery: Number,
    amount: Number,
    lotteryNumber: String,
  },
  { timestamp: true },
);

const gameDetails = mongoose.model("gameDetails", gameDetailsSchema);

module.exports = gameDetails;
