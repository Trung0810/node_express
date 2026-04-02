const express = require("express");
const routerAPI = express.Router();
const postData = require("../PostData");

routerAPI.get("/posts", (req, res) => {
  res.status(200).json({
    status: "success",
    posts: postData,
  });
});

routerAPI.get("/posts/:id", (req, res) => {
  const { id } = req.params;
});
module.exports = routerAPI;
