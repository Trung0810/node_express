require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/API");
const connection = require("./config/DataBase");
const Post = require("./models/Post");
const Author = require("./models/Author");

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

// const newAuthor = new Author({
//   authorID: 1,
//   fullName: "Nguyen Duc Trung",
//   userName: "ductrung0810",
// });
// newAuthor.save();

// const newPost = new Post({
//   postID: 1,
//   title: "First Post",
//   description: "Hello Mongodb",
//   content: "Hello Mongoose",
//   author: newAuthor,
//   publishedAt: "2026-03-29",
//   viewCount: 1000,
//   likeCount: 900,
// });
// newPost.save();

app.use(cors());
app.use("/v1/api", router);

(async () => {
  console.log(">>> CONSOLE <<<");
  await connection(); // connect db first
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
