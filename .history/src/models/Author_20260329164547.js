const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorSchema = Schema({
  _id: String,
  fullName: String,
  userName: String,
});
