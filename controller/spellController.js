const db = require("../models");


module.exports = {
    spellsByClass: (req,res) =>{
        let PCname = req.params.PCname;
        db.Spells.find({playerClasses: PCname}).then(result => {
            console.log(result);

        });

    },
    spellsByLevel: (req,res) =>{
        let spellLevel = req.params.level;
        db.Spells.find({spellLevel: spellLevel}).then(result => {

        });

    },
    spellsByLevelAndClass: async (req, res) => {
        const level = req.query.level
        const playerClass = req.query.playerClass;
        console.log(level);
        console.log(playerClass);

        let result = await db.Spells.find({spellLevel : level, playerClass: {$in : [playerClass]}})
        if(result) {
            console.log(result);
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    }
}