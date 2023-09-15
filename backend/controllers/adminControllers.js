/* eslint-disable no-undef */
const Game = require("../models/game");

const createGame = async (req, res) => {
  const { gameType, gameName, startTime, endTime, winningPrice } = req.body;
  const details = { gameName, gameType, endTime, winningPrice };
  if (startTime) details.startTime = startTime;
  try {
      const newGame = await Game.create(details);
    //   console.log(newGame);
      res.status(201).json(newGame);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }

};
const getAllGames = async (req, res) => {
  try {
      const allGames = await Game.find({});
    //   console.log(allGames);
      res.status(201).json(allGames);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }

};

module.exports = { createGame,getAllGames };
