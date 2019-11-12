require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 1337;
const app = express();


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);