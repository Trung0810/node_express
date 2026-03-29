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

const Post = model("posts", postSchema);
const newPost = new Post({ id: 1, name: "first-post" });
newPost.save();

app.use(cors());
app.use("/v1/api", router);

(async () => {
  console.log(">>> CONSOLE <<<");
  await connection(); // connect db first
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
