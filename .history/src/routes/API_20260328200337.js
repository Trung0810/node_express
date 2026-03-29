const express = require("express");
const routerAPI = express.Router();
const blogData = require("../BlogData");

routerAPI.get("/users", (req, res) => {
  res.status(200).json({
    status: 200,
    data: blogData,
  });
});

module.exports = routerAPI;
