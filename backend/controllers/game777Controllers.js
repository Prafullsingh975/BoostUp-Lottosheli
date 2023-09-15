/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const GameDetails = require("../models/gameDetails");
const User = require("../models/user.js");
const Game = require("../models/game");
//Register game me Chance wale game ka time 2 hours hai use fix krna hai
//Active game me wahi game 
// Lottery number unique generate krna hai
const registerGame777 = async (req, res) => {
  const { tables, amount, lottery, gameData } = req.body;

  try {
    const user = await User.findById(req.user._id);
    const game = await Game.findById(gameData);
    let playedTime = 0;
    if(game && game.gameType === "777"){
      game.playedBy.forEach(id=>{
        if(String(id) === String(req.user.id)) playedTime++;
      })
    } 
    if (user.balance >= amount) {
      if((game.gameType === "777" && playedTime < 2)){
        const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
        const game = {
          gameData,
          lotteryNumber: randomFourDigitNumber,
          userDetails: req.user._id,
          tables: tables,
          amount,
          lottery,
        };
        const newGame = await GameDetails.create(game);
        await Game.findByIdAndUpdate(
          gameData,
          {
            $push: { playedBy: req.user._id },
          },
          { new: true },
        );
        user.balance = user.balance - amount;
        user.gamePlayed = [...user.gamePlayed, newGame._id];
        await user.save();
        // console.log(update);
        return res.status(202).json({
          created: true,
          message: "Submitted Successfuly",
        });
      }else{
        return res.status(400).json({
          created:false,
          message:"You have no more chances to play"
        })
      }
      
    } else {
      return res.status(400).json({
        created: false,
        message: "Not Sufficent Balance",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const registerGame123 = async (req, res) => {
  const { tables, amount, lottery, gameData } = req.body;

  try {
    const user = await User.findById(req.user._id);
    const game = await Game.findById(gameData);
    let isAllowed = true;
      game.playedBy.forEach(id=>{
        if(String(id) === String(req.user.id)) isAllowed = false;
      })
    if (user.balance >= amount) {
      if (isAllowed) {
        const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
        const game = {
          gameData,
          lotteryNumber: randomFourDigitNumber,
          userDetails: req.user._id,
          tables: tables,
          amount,
          lottery,
        };
        const newGame = await GameDetails.create(game);
        await Game.findByIdAndUpdate(
          gameData,
          {
            $push: { playedBy: req.user._id },
          },
          { new: true },
        );
        user.balance = user.balance - amount;
        user.gamePlayed = [...user.gamePlayed, newGame._id];
        await user.save();
        // console.log(update);
        return res.status(202).json({
          created: true,
          message: "Submitted Successfuly",
        });
      } else {
        return res.status(400).json({
          created: false,
          message: "You have no more chances to play",
        });
      }
      
    } else {
      return res.status(400).json({
        created: false,
        message: "Not Sufficent Balance",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const findActiveGame = async (req, res) => {
  // Get the current date and time
  const currentDate = new Date();

  try {
    const activeGames = await Game.find({
      startTime: { $lte: currentDate },
      endTime: { $gte: currentDate },
    });
    res.status(200).json(activeGames);
  } catch (error) {
    console.error("Error fetching active games:", error);
    return res.status(500).json(error);
  }
};

module.exports = { registerGame777, findActiveGame,registerGame123 };
