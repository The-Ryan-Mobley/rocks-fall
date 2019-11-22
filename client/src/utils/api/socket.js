import * as io from "socket.io-client";

const socket = io.connect('http://localhost:1337/');

export default {
    socketEmmissions: () => {
        socket.on('welcome', function(soc){
            console.log(soc);
          });
        socket.on("joined", (msg) => {
            
        });
    
    },
    lobbyHost: (lobbyData, userData) => {
        let room = lobbyData.lobbyName;
        let passing = {
            room,
            userData
        }
        socket.emit('joinRoom', passing);
    },
    joinLobby: (lobbyData, userData) => {
        let room = lobbyData.lobbyName;
        let passing = {
            room,
            userData
        }
        socket.emit('joinRoom', passing);
        socket.emit("playerJoined", passing);
    },
    leaveLobby: (room, userData) => {
        let passing = {
            room,
            userData
        }
        socket.emit('leaveRoom', passing)

    },
    listenLeave: (callback) => {
        socket.on("playerLeft", data => {
            callback(data);
        })

    },
    listenJoin: (callback) => {
        socket.on("joined", (msg) => {
            callback(msg);
        });
    },
    postMessage: (room, message) => {
        let passing = {
            room,
            message
        }
        socket.emit("message", passing);
    },
    listenChat: (callback) => {
        socket.on("chat", msg => {
            console.log("calling *********************************");
            callback(msg);
        })
    }

}
