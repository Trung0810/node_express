const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const { title } = req.query;

    let filter = {};

    if (title) {
      filter.title = title;
    }

    const postList = await Post.find(filter);

    if (!postList || postList.length === 0) {
      return res.status(404).json({
        message: "Post not found!",
      });
    }

    return res.status(200).json({
      message: "Get posts successfully!",
      data: postList,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Get posts falled!",
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    return res.status(200).json({
      message: "Get post successfully!",
      data: post,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Post not found!",
    });
  }
};

const createNewPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(404).json({
        message: "Please fill out all field!",
      });
    }

    const newPost = await Post.create({ title, content });

    return res.status(201).json({
      message: "Create new post successfully!",
      data: newPost,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Create new post falled!",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(404).json({
        message: "Please fill out all field!",
      });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { title, content },
    );

    return res.status(200).json({
      message: "Update post successfully!",
      data: updatedPost,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Update post falled!",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePost = await Post.findByIdAndDelete({ _id: id });

    if (!deletePost) {
      return res.status(404).json({
        message: "Post not found!",
      });
    }

    return res.status(200).json({
      message: "Delete post successfully!",
      data: deletePost,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Delete post falled!",
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
};
