const express = require("express");
const routerAPI = express.Router();
const postData = require("../PostData");

routerAPI.get("/posts", (req, res) => {
  return res.status(200).json({
    status: "success!",
    posts: postData,
  });
});

routerAPI.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = postData.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      status: "post not found!",
    });
  }

  return res.status(200).json({
    status: "success!",
    post: post,
  });
});

module.exports = routerAPI;
