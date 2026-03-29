const express = require("express");

const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mongodb");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
