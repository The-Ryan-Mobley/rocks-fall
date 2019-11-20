import openSocket from "socket.io-client";

const socket = openSocket('http://localhost:1337/');

export default {
    socketEmmissions: () => {
        socket.on('welcome', function(soc){
            console.log(soc);
          });
    
    },
    lobbyHost: (lobbyData) => {
        let room = lobbyData.lobbyName;
        socket.emit('joinRoom', room);
        socket.on("status", (msg) => {
            console.log("msg");
        })
        

    },
    joinLobby: (lobbyData, userData) => {
        let room = lobbyData.lobbyName;
        socket.emit('joinRoom', room);
        socket.to(room).emit("playerJoined", userData);
        socket.on("status", (msg) => {
            console.log("joined and ready");
        });

    }

}
