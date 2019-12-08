const db = require("../models");

module.exports = {
    createLobby: async ( req ,res ) => {
        try {
            const lobbyObj = {
                hostId: req.body.hostId,
                hostName: req.body.hostName,
                hostThumbnail: req.body.hostThumbnail,
                lobbyName: req.body.lobbyName,
                lobbyPassword: req.body.lobbyPassword
            }
            const result = await db.Lobbies.create(lobbyObj);
            if(result) {
                res.json(result);
            } else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    findLobby: async ( req , res ) => {
        try {
            const result = await db.Lobbies.findOne({hostId : req.params.hostId}).sort({createdOn: -1});
            if(result) {
                res.json(result);
            } else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    findById: async ( req , res ) => {
        try{
            const result = await db.Lobbies.findOne({ _id : req.params.lobbyId});
            if(result) {
                res.json(result);
            } else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    joinLobby: async ( req , res ) => {
        try {
            const result = await db.Lobbies.findOne({lobbyName: req.query.lobbyName});
            if(result) {
               if(req.query.lobbyPassword === result.lobbyPassword) {
                   res.json(result);
               } else {
                   res.sendStatus("404");
               }
            } else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    updateActiveUsers: async ( req , res ) => {
        try {
            const result = await db.Lobbies.updateOne(
                { 
                    _id: req.params.lobbyId
                }, 
                { 
                    $push : {
                        activeUsers : req.body
                    }
                }
            );
            if(result) {
                const newDock = await db.Lobbies.findOne({ _id: req.params.lobbyId});
                if(newDock) {
                    res.json(newDock.activeUsers);
                } else {
                    res.sendStatus("404");
                }
            }
            else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    userLeft: async (req, res) => {
        try {
            const result = await db.Lobbies.updateOne(
                {
                    _id: req.params.lobbyId
                }, 
                { 
                    $set : {
                        activeUsers : req.body
                    }
                }
            );
            if(result) {
                const newDock = await db.Lobbies.findOne({ _id: req.params.lobbyId});
                if(newDock) {
                    res.json(newDock.activeUsers);
                } else {
                    res.sendStatus("504");
                }
            } else {
                res.sendStatus("504");
            }
        } catch {
            res.sendStatus("503");
        }
    },
    deleteLobby: async ( req , res ) => {
        try {
            const result = await db.Lobbies.findByIdAndRemove(req.params.lobbyId);
            if (result) {
                res.json(result);
            } else {
                res.sendStatus("404");
            }
        } catch {
            res.sendStatus("503");
        }
    }
}