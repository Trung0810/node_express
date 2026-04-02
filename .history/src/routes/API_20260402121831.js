const express = require("express");
const routerAPI = express.Router();
const postData = require("../PostData");

routerAPI.get("/posts", (req, res) => {
  res.status(200).json({
    status: "success!",
    posts: postData,
  });
});

routerAPI.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = postData.find((p) => p.id === id);

  if (!post) {
    res.status(404).json({
      status: "post not found!",
      post: post,
    });
  }
});
module.exports = routerAPI;
