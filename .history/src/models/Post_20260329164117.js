const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  title: String,
  description: String,
  content: String,
  author: Author,
  publishedAt: Date,
  viewCount: Number,
  likeCount: Number,
});
