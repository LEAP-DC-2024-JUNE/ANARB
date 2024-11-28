const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./configs/.env" });

const MONGO_URI = process.env.MONGO_URI;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
