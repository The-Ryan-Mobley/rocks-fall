const mongoose = require("mongoose");

const Schema = mongoose.Schema;
/*
lobbyData: { what lobbies look like in redux
        host: {
            hostId: "",
            hostName: ""
        },
        activeUsers: [],
        chat: {
            messages: [],
            newMessage: ""
        }
    }
*/ 

const lobbySchema = new Schema({
    hostId: {
        type:String,
        trim: true,
        required: "need a host id"
    },
    hostName: {
        type: String,
        trim: true,
        required: "need hostName"
    },
    hostThumbnail: {
        type: String,
        trim: true,
        required: "need thumbnail"
    },
    lobbyName: {
        type: String,
        trim: true,
        required: "need a lobby name"
    },
    lobbyPassword: {
        type: String,
        trim: true,
        required: "need a lobby password"

    },
    activeUsers: {
        type: [Object]
    },
    createdOn: {
        type: Date,
        expires: 86400,
        default: Date.now()

    }
});

const Lobbies = mongoose.model("Lobbies", lobbySchema );
module.exports = Lobbies;