const express = require("express");

const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongodb");
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
