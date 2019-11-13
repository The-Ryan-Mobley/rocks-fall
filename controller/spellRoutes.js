const db = require("../models");
const axios = require("axios")
module.exports = {
    spellsByClass: (req,res) =>{
        let PCname = req.body.PCname;
        db.Spells.find({playerClasses: PCname}).then(result => {
            console.log(result);

        });

    },
    spellsByLevel: (req,res) =>{
        let spellLevel = req.body.level;
        db.Spells.find({spellLevel: spellLevel}).then(result => {
            console.log(result);

        });

    }
}