const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const authorSchema = Schema({
  authorID: String,
  fullName: String,
  userName: String,
});

const Author = model("authors", authorSchema);

module.exports = Author;
