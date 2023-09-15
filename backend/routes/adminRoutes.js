/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const adminContorallers = require("../controllers/adminControllers.js");

router.get(
  "/",
  authenticate.authenticateIsAdmin,
  adminContorallers.getAllGames,
);
router.post(
  "/create-game",
  authenticate.authenticateIsAdmin,
  adminContorallers.createGame,
);

module.exports = router;
