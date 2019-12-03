const db = require("../models");


module.exports = {
    spellsByClass: (req,res) =>{
        let PCname = req.params.PCname;
        db.Spells.find({playerClasses: PCname}).then(result => {

        });

    },
    spellsByLevel: (req,res) =>{
        let spellLevel = req.params.level;
        db.Spells.find({spellLevel: spellLevel}).then(result => {

        });

    },
    spellsByLevelAndClass: async (req, res) => {
        console.log(req.query);
        const level = parseInt(req.query.level);
        const playerClass = req.query.playerClass;

        const result = await db.Spells.find({spellLevel : level, playerClass: playerClass})
        if(result) {
            if(level === 0) {
            }
            res.json(result);
        } else {
            res.sendStatus("404");
        }
    }
}