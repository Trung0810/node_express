const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = Schema({
  title: String,
  description: String,
  content: String,
  author: Author,
  publishedAt: Date,
  viewCount: Number,
  likeCount: Number,
});

const Post = model("posts", postSchema);

module.exports = Post;
