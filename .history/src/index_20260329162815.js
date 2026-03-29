require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/API");
const connection = require("./config/DataBase");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

app.use(cors());
app.use("/v1/api", router);

// tao cau truc cho schema
const postSchema = Schema({
  name: String,
});

// posts la 1 ban ghi dc tao moi trong csdl (tu dong chuyen ve dang chu thuong so nhieu)
// Post la lop trong ban ghi nay
// newPost la 1 doi tuong
const Post = model("posts", postSchema);
const newPost = new Post({ id: 1, name: "first-post" });
newPost.save();

(async () => {
  console.log(">>> CONSOLE <<<");
  await connection(); // connect db first
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
