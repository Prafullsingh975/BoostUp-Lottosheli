/* eslint-disable no-undef */
const mongoose = require("mongoose");

// var now = new Date();

const gameSchema = mongoose.Schema(
  {
    gameType: {
      type: String,
      require: true,
    },
    gameName: {
      type: String,
      required: true,
    },
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, required: true },
    winningPrice: { type: Number, required: true },
    isResult:{
      type:Boolean,default:false
    },
    winners:[{type:String}],
    winningCombinations: [{type:Number}],
    playedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true },
);

const game = mongoose.model("game", gameSchema);

module.exports = game;
