/* eslint-disable no-undef */
const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "user",
  },
  lastName: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: { type: Number, default: 0 },
  gamePlayed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "gameDetails",
    },
  ],
  resetToken: String,
  resetTokenExpiry: Date,
  isVerified: { type: Boolean, default: false },
});

const user = mongoose.model("user", userSchema);

const createAdmin = async () => {
  try {
    const admin = await user.findOne({userType:"admin"});
    // console.log(admin);
    if (!admin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("password", salt);
      console.log(hashedPassword, "hashed", salt);
      const initialAdmin = new user({
        firstName:"Admin",
        userType: "admin",
        lastName: "admin",
        mobile: "123456789",
        password: hashedPassword,
        idNumber: "1",
        email:"admin@male.com"
      });
      // console.log("initial admin")
      await initialAdmin.save();
      console.log("initial admin created successfully");
    }
  } catch (error) {
    console.log("Error while creating the admin", error);
  }
};

createAdmin();

module.exports = user;
