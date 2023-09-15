/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const { authenticateIsLogin } = require("../middlewares/authenticate.js");
const game777Controllers = require("../controllers/game777Controllers.js");

router.get("/active-game",game777Controllers.findActiveGame);
router.post("/777/register", authenticateIsLogin, game777Controllers.registerGame777);
router.post("/123/register", authenticateIsLogin, game777Controllers.registerGame123);

module.exports = router;
