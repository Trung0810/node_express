const express = require("express");
const postRouterAPI = express.Router();
const {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

postRouterAPI.get("/posts", getAllPosts);

postRouterAPI.get("/posts/:id", getPostById);

postRouterAPI.post("/posts", createNewPost);

postRouterAPI.put("/posts/:id", updatePost);

postRouterAPI.delete("/posts/:id", deletePost);

module.exports = postRouterAPI;
