const express = require("express");
const routerAPI = express.Router();
const blogData = require("../BlogData");

routerAPI.get("/blogs", (req, res) => {
  res.status(200).json({
    status: "success",
    blogs: blogData,
  });
});

module.exports = routerAPI;
