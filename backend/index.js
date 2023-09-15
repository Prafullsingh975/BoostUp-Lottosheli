/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");

const connectDb = require("./utils/connectDb");
const adminRoute = require("./routes/adminRoutes.js");
const userRoute = require("./routes/userRoutes.js");
const game777 = require("./routes/game777Route.js");

const app = express();
app.use(cors());

const PORT = 5050;
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lottry game Backend");
});
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use("/api/game/", game777);

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
  connectDb();
});
