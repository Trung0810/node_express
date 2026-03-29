const express = require("express");
const app = express();
require("dotenv").config();

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(hostname, port, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
