const express = require("express");
const routerAPI = express.Router();
const blogData = require("../BlogData");

routerAPI.get("/", (req, res) => {
  res.send("hello world with API!");
});

module.exports = routerAPI;
