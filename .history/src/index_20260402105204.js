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

app.use(cors());
app.use("/v1/api", router);

(async () => {
  console.log(">>> CONSOLE <<<");
  await connection(); // connect db first
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
