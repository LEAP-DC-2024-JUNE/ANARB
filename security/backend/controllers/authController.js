import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const generateJwtToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = async (req, res) => {
  try {
    const aUser = await User(req.body);
    const newUser = await aUser.save();

    res.status(201).json({
      status: "success",
      data: { user: newUser },
    });
  } catch (error) {
    if (
      error.name === "ValidationError" ||
      (error.name === "MongoServerError" && error.code === 11000)
    ) {
      return res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide your email and password",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !user.matchPassword(password, user.password)) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }
    const jwtToken = generateJwtToken(user._id, user.name, user.email);
    res.status(200).json({
      status: "success",
      message: "You are logged in successfully! ",
      token: jwtToken,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
