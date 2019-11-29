const db = require("../models");

module.exports = {
    allCharacters: (req,res) => {
        let userId = req.params.userId;
        db.PlayerCharacter.find({authorId: userId})
    },
    createCharacter: async ( req , res ) => {
        console.log(req.body);
        let result = await db.PlayerCharacter.create(req.body);
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    },
    updateCharacter: async (req, res) => {
        let result = await db.PlayerCharacter.updateOne({_id: req.body._id},req.body,{upsert: true});
        if (result) {
            let updatedDoc = await db.PlayerCharacter.findOne({_id : req.body._id});
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
        let result = await db.PlayerCharacter.findByIdAndRemove(req.params.id);
        if(result) {
            res.sendStatus("200");

        } else {
            res.sendStatus("504");
        }

    }
}