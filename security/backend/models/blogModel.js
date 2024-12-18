import mongoose from "mongoose";
import validator from "validator";
import User from "./userModel.js";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A blog must have a title."],
  },
  content: {
    type: String,
    required: [true, "A blog must have a content."],
  },
  postedDateTime: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
