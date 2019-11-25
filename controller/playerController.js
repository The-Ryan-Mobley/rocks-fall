const db = require("../models");

module.exports = {
    allCharacters: (req,res) => {
        let userId = req.params.userId;
        db.PlayerCharacter.find({authorId: userId})
    },
    createCharacter: ( req , res ) => {
        
    }
}