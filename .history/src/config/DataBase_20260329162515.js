require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { connect } = mongoose;
const url = process.env.DB_URL;

const connection = async () => {
  try {
    await connect(url);
    console.log("connect to data base success!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
