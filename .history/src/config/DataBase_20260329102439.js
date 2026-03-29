const express = require("express");

const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost/mongodb")
    }
}