import * as io from "socket.io-client";

const socket = io.connect('http://localhost:1337/');

export default {
    socketEmmissions: () => {
        socket.on('welcome', function(soc){
            console.log(soc);
          });
    
    },
    lobbyHost: (lobbyData, userData) => {
        let room = lobbyData.lobbyName;
        let passing = {
            room,
            userData
        }
        socket.emit('joinRoom', passing);
        socket.on("status", (msg) => {
            console.log("msg");
        })
        

    },
    joinLobby: (lobbyData, userData) => {
        let room = lobbyData.lobbyName;
        let passing = {
            room,
            userData
        }
        socket.emit('joinRoom', passing);
        io.to(room).emit("playerJoined", userData);
        socket.on("status", (msg) => {
            console.log("joined and ready");
        });

    }

}
