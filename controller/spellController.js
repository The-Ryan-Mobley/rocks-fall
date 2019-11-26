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
            console.log(result);

        });

    },
    spellsByLevelAndClass: async (req, res) => {
        const level = req.params.level
        const playerClass = req.params.playerClass;

        let result = await db.Spells.find({spellLevel : level, playerClass: playerClass})
        if(result) {
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    }
}