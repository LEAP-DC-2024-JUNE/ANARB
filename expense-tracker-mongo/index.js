const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
dotenv.config({ path: "./configs/.env" });

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

const itemRouter = require("./routers/itemRouter");

app.use("/api/items", itemRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(PORT, () => console.log(`Server running on ${PORT} `));
