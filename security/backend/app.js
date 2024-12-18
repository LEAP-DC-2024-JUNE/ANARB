import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/mongoDbConfig.js";
import authRoutes from "./routers/authRouter.js";
import blogRoutes from "./routers/blogRouter.js";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

connectDb();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
