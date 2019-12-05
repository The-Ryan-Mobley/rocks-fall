import * as io from "socket.io-client";

const socket = io.connect();

export default {
    socketEmmissions: () => {
        socket.on('welcome', function(soc){
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
    joinGlobal: (userData) => {
        const room = "Global"
        const passing = {
            room,
            userData
        }
        socket.emit('joinRoom', passing);

    },
    leaveGlobal: (userData) => {
        const room = "Global";
        let passing = {
            room,
            userData
        }
        socket.emit('leaveRoom', passing)
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
            callback(msg);
        })
    }

}
