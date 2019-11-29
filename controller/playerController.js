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
        
    }
}