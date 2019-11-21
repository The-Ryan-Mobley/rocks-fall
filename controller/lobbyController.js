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
        let result = await db.Lobbies.findOne({hostId : req.params.hostId}).sort({createdOn: -1});
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

    },
    joinLobby: async ( req , res ) => {
        let result = await db.Lobbies.findOne({lobbyName: req.query.lobbyName});
        if(result) {
           if(req.query.lobbyPassword === result.lobbyPassword) {
               res.json(result);
           } else {
               res.sendStatus("404");
           }
        } else {
            res.sendStatus("404");
        }
    },
    updateActiveUsers: async ( req , res ) => {
        console.log("AYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY LAMO")
        console.table(req.body);
        let result = await db.Lobbies.findOneAndUpdate(
            { _id: req.params.lobbyId}, 
            { $push : {
                activeUsers : req.body
            }
        });
        if(result) {
            console.log("HEYYYYYYYYYYYYYYYYYYYYYYYYYYYAAAAAAAAAAAAAAAAA");
            res.json(result);

        }
        else {
            res.sendStatus("404");
        }

    }

}