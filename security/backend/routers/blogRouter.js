import express from "express";
import {
  createBlog,
  readSingleBlog,
  readBlogsByAuother,
} from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("", protect, createBlog);
router.get("/:blogId", readSingleBlog);
router.get("/author/:authorId", readBlogsByAuother);

export default router;
