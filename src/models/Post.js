const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const mongoose_delete = require("mongoose-delete");

// tao cau truc cho schema
const postSchema = Schema(
  {
    postID: String,
    title: String,
    content: String,
  },
  { timeStamp: true }, // createdAt, updatedAt
);

postSchema.plugin(mongoose_delete);
// Post: model -> co the nhu 1 lop doi tuong
// posts: collection name

const Post = model("posts", postSchema);

module.exports = Post;
