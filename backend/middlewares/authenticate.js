/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const authenticateIsLogin = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).json("You have to log in");
  }
  jwt.verify(token, "your-secret-key", async (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = await User.findById(user.userId).select("-password");
    next();
  });
};

const authenticateIsAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      return res.status(401).json("You have to log in");
    }
    jwt.verify(token, "your-secret-key", async (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = await User.findById(user.userId).select("-password");
      if (req.user.userType === "admin") next();
      else res.json("only admin can access");
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  authenticateIsLogin,
  authenticateIsAdmin,
};
