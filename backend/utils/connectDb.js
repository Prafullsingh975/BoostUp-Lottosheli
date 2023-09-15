/* eslint-disable no-undef */
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/boostup-lottery";
const connectDb = async () => {
  await mongoose.connect(url);
  console.log(`Connected to ${url}`);
};

module.exports = connectDb;
