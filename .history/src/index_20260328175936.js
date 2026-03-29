require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/API");

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
