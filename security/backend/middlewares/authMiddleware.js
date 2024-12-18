import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      console.error(authorization);
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in! Please log in!",
      });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      console.error(token);
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in! Please log in!",
      });
    }
    // console.log("Decoded:", decoded);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        status: "fail",
        message: "The user belonging to this token no longer exists!",
      });
    }

    console.log("Retrieved:", req.user);

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({
      status: "fail",
      message: "Invalid token! Please log in again!",
    });
  }
};
