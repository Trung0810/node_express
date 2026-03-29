const express = require("express");
const routerAPI = express.Router();
const blogData = require("../BlogData");

routerAPI.get("/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    posts: blogData,
  });
});

// routerAPI.get("/posts/")

module.exports = routerAPI;
