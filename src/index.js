require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const postRouterAPI = require("./routes/postAPI");
const connection = require("./config/DataBase");

const hostname = "localhost";
const port = 8888;

app.use(cors());
app.use(express.json());
app.use("/v1/api", postRouterAPI);

(async () => {
  console.log(">>> CONSOLE <<<");
  await connection();
  app.listen(port, hostname, () => {
    console.log(`App listening on http://${hostname}:${port}`);
  });
})();
