require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const url = process.env.DB_URL;

const connection = async () => {
  try {
    await mongoose.connect();
    console.log("connect success!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
