import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Connected to MONGO DB on ${MONGO_URL}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
