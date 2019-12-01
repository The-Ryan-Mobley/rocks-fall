const db = require("../models");

module.exports = {
    createCharacter: async ( req , res ) => {
        delete req.body._id;
        let result = await db.PlayerCharacter.create(req.body);
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    },
    updateCharacter: async (req, res) => {
        const result = await db.PlayerCharacter.updateOne({_id: req.body._id},req.body,{upsert: true});
        if (result) {
            const updatedDoc = await db.PlayerCharacter.findOne({_id : req.body._id});
            if(updatedDoc) {
                res.json(updatedDoc);

            } else {
                res.sendStatus("404");
            }

        } else {
            res.sendStatus("504");
        }
    },
    deleteCharacter: async ( req, res ) => {
        const result = await db.PlayerCharacter.findByIdAndRemove(req.params.id);
        if(result) {
            res.sendStatus("200");

        } else {
            res.sendStatus("504");
        }

    },
    listCharacters: async ( req, res ) => {
        const result = await db.PlayerCharacter.find({authorId : req.params.id});
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("504");
        }
    },
    findCharacter: async ( req , res ) => {
        try {
            const result = await db.PlayerCharacter.find({_id : req.params.id});
            if(result) {
                res.json(result);
            } else {
                res.sendStatus("504");
            }
        } catch {
            res.sendStatus("503");

        }
    }
}