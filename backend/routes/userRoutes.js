/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers.js");
const authenticate = require("../middlewares/authenticate.js");

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.get("/", authenticate.authenticateIsLogin, userControllers.getDetail);
router.put("/", authenticate.authenticateIsLogin, userControllers.update);
router.get(
  "/active-game",
  authenticate.authenticateIsLogin,
  userControllers.getActiveGames,
);
router.get(
  "/history",
  authenticate.authenticateIsLogin,
  userControllers.getGameHistory,
);
router.get(
  "/send/verificationToken",
  authenticate.authenticateIsLogin,
  userControllers.sendVerifyMail,
);
router.get("/verify/email/:resetToken", userControllers.verifyMail);
router.get("/forgot-password", userControllers.sendResetToken);
router.get("/reset-password", userControllers.resetPasswor);
router.get(
  "/all-games",
  authenticate.authenticateIsLogin,
  userControllers.getAllGames,
);

module.exports = router;
