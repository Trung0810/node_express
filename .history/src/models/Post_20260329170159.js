const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Author = require("./Author");

// tao cau truc cho schema
const postSchema = Schema({
  postID: String,
  title: String,
  description: String,
  content: String,
  author: Author,
  publishedAt: Date,
  viewCount: Number,
  likeCount: Number,
});

// posts document dc tao moi trong db chua cac collections
// Post co the hieu la 1 lop trong document
// co the tao cac collection = new Post
const Post = model("posts", postSchema);

module.exports = Post;
