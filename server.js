require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 1337;
const app = express();


app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  app.use(routes);
  
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rocksFall");
  
  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  