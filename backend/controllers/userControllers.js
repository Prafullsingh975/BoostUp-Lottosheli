/* eslint-disable no-undef */
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../utils/mailService.js");
const url = "https://localhost:5050/user/";

// Generate a random token
const generateToken = () => {
  return crypto.randomBytes(20).toString("hex");
};

const register = async (req, res) => {
  const { firstName, lastName, idNumber, email, mobileNumber, password } =
    req.body;

  try {
    const isFound = await User.findOne({ email: email });
    if (isFound) res.status(400).json("Allready register");
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = {
        firstName,
        lastName,
        idNumber,
        mobileNumber,
        password: hashedPassword,
        email,
      };
      const user = await User.create(newUser);
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("User not registerd");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(password, user.password);
    if (!isMatch && user.email === email) {
      return res.status(403).json("Authentication Failed");
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "8h",
    });
    res.status(200).json({
      token,
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getDetail = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate("gamePlayed")
      .select("-password -isVerified -userType");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    // const { userId } = req.params;
    const {
      firstName,
      lastName,
      idNumber,
      email,
      mobileNumber,
      oldPassword,
      newPassword,
      sendMail,
    } = req.body;
    const user = await User.findById(req.user._id);
    if (oldPassword && newPassword) {
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (isMatch) {
        const salt = await bcrypt.genSalt(10);
        if (newPassword.trim().length > 0)
          user.password = await bcrypt.hash(newPassword, salt); 
      } else {
        return res.status(401).json("Incorrect old password");
      }
    }
    if (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      idNumber.trim().length > 0 &&
      email.trim().length > 0 &&
      mobileNumber.trim().length > 0
    ) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.idNumber = idNumber;
      if(user.email!== email){
        user.email = email;
        user.isVerified = false
      }
      user.mobileNumber = mobileNumber;

    }else{
      return res.staus(400).json("Fill all the field")
    }
    await user.save();
    const message = `Dear ${user.firstName} ${user.lastName}
  
  Your data is succesfully updated
  `;
    sendMail &&
      mailer(user.email, message, "Update Information").then((res) => {
        console.log("sent mail !", res);
      });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getActiveGames = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "gamePlayed",
      populate: { path: "gameData", select: "-playedBy" },
    });
    const  activeForm = user?.gamePlayed?.filter((game)=>(game.gameData.isResult === false));
    res.status(201).json(activeForm);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getGameHistory = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "gamePlayed",
      populate: { path: "gameData", select: "-playedBy" },
    });
    const  gameHistory = user?.gamePlayed?.filter((game)=>(game.gameData.isResult === true));
    res.status(201).json(gameHistory);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const getWinnings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "gamePlayed",
      populate: { path: "gameData", select: "-playedBy" },
    });
    const  winnings = user?.gamePlayed?.filter((game)=>(game.gameData.isResult === true));
    res.status(201).json(winnings);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const sendVerifyMail = async (req, res) => {
  try {
    const user = await User.findById(req._id);
    const token = generateToken();
    user.resetToken = token;
    user.resetTokenExpiry = Date.now();
    await user.save();
    const message = `Dear ${user.firstName} ${user.lastName}
  
  Thank you for registering on the lotto sheli for
  Lottosheli.com
  
  This is the final step towards the verification of your account as an User.
  
  Please click on the below link or copy paste this URL into your browser. This will confirm your registration on our application.
  
  Account Confirmation Link: (${url}verify/mail/:${token});
  
  NOTE: Please note this URL is only valid for 24 hours. If the link you’ve clicked has expired, then please re-generate a new verification link from the ‘Register as an user’ area on the login page.
  
  Please enter the below email address as username to access the lotto sheli page
  
  1. lotto-sheli
  
  Email Address: ${user.email}.
  
  Please use the password which was created during registration. If you do not remember your password,
  
  please click on ‘Forgot Password’ option on the login page. You will receive a reset password link to
  
  generate a new password to login into your account.
  
  You can change your password and other personal information by logging into the The Lotto Sheli
  
  Best Regards
  
  Lotto Sheli Org
  
   
  
  Please contact the The Lotto Sheli Support Team (Email ID:
  
  info@lotosheli.com.) if you have any questions.`;
    mailer(user.email, message, "Confirm Mail").then((res) => {
      console.log("sent mail !", res);
    });
    res.status(200).json("Sent...");
  } catch (error) {
    res.status(500).json(error);
  }
};

const sendResetToken = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = generateToken();
      user.resetToken = token;
      user.resetTokenExpiry = Date.now();
      await user.save();
      const message = `Dear ${user.firstName} ${user.lastName}
  
  Please click on the below link or copy paste this URL into your browser. To reset your password
  
  Reset Link Link: (${url}verify/mail/:${token});
  
  NOTE: Please note this URL is only valid for 1 hours. 
  
  Best Regards
  
  Lotto Sheli Org
   
  Please contact the The Lotto Sheli Support Team (Email ID:
  
  info@lotosheli.com.) if you have any questions.`;
      mailer(user.email, message, "Rest Password").then((res) => {
        console.log("sent mail !", res);
      });
      res.status(200).json("Sent...");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const resetPasswor = async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;
  try {
    const user = User.findOne({ resetToken });
    if (user) {
      // 3600000 1 hours
      if (
        user.resetToken === resetToken &&
        user.resetTokenExpiry <= Date.now() + 3600000
      ) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();
        res.status(200).json("Password change succesfuly");
      }
      res.status(400).json("Token Expired");
    } else res.status(404).json("User not found");
  } catch (error) {
    res.status(500).json(error);
  }
};

const verifyMail = async (req, res) => {
  const { resetToken } = req.params;
  try {
    const user = await User.findOne({ resetToken });
    if (user) {
      // 3600000 1 hours
      if (
        user.resetToken === resetToken &&
        user.resetTokenExpiry <= Date.now() + 3600000
      ) {
        user.isVerified = true;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;
        await user.save();
        res.status(200).json({ verified: true });
      }
      res.status(400).json("Token Expired");
    } else res.status(404).json("User not found");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllGames = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("gamePlayed");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
  getDetail,
  update,
  getActiveGames,
  getGameHistory,
  sendVerifyMail,
  verifyMail,
  sendResetToken,
  resetPasswor,
  getAllGames,
};
