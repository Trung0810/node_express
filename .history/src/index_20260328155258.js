require("dotenv").config();
const express = require("express");
const app = express();

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8888;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("Hello User!");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
