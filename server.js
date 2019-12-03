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

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
  
  
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rocksFall");
  mongoose.set('useFindAndModify', false);

  //socket depends
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  io.on('connection', function(socket){
    console.log("user logged");
    socket.emit("welcome", "the socket works!!!");

    socket.on("joinRoom", data => {
      console.log(data.room);
      socket.join(data.room);
      socket.to(data.room).emit("joined", data);
    });
    socket.on("message", data => {
      socket.to(data.room).emit("chat", data.message);

    });
    socket.on("playerJoined", data => {
      socket.to(data.room).emit("chat", data.userData.userName+" has joined the game");
      socket.emit("newPlayer", data);
    })
    socket.on("leaveRoom", data => {
      socket.to(data.room).emit("playerLeft", data.userData);
      socket.leave(data.room);
      socket.to(data.room).emit("chat", data.userData.userName+" has left the game");
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });


  
  // Start the API server
  server.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    //fs.writeFile(__dirname + '/start.log', 'started'); 
  });
  