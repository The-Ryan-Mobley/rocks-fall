const db = require("../models");

module.exports = {
    createLobby: async ( req ,res ) => {
        let lobbyObj = {
            hostId: req.body.hostId,
            hostName: req.body.hostName,
            lobbyName: req.body.lobbyName,
            lobbyPassword: req.body.lobbyPassword
        }
        let result = await db.Lobbies.create(lobbyObj);
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    },
    findLobby: async ( req , res ) => {
        let result = await db.Lobbies.findOne({ hostId : req.params.hostId});
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    },
    findById: async ( req , res ) => {
        let result = await db.Lobbies.findOne({ _id : req.params.lobbyId});
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }

    }

}