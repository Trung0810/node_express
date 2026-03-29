require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/API");
const connection = require("./config/DataBase");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

app.use(cors());
app.use("/v1/api", router);

const newPost = Schema({
  id: 1,
  name: "first blog",
})(async () => {
  console.log(">>> CONSOLE <<<");
  await connection(); // connect db first
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
