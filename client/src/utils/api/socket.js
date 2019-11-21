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
        console.table(lobbyData);
        let room = lobbyData.lobbyName;
        console.log("^^^^^^^^^^^^^^^^^^^^^"+room);
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
        io.to(room).emit("playerJoined", userData);
        

    },
    listenJoin: (callback) => {
        socket.on("joined", (msg) => {
            console.log("BELOW IS THE SOCKET UPDATE");
            callback(msg);
        });

    }

}
