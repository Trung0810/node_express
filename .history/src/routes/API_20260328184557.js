const express = require("express");
const routerAPI = express.Router();
const blogData = require("../BlogData");

routerAPI.get("/", (req, res) => {
  res.status(200).json(blogData);
});

module.exports = routerAPI;
