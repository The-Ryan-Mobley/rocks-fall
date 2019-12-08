const db = require("../models");


module.exports = {
    spellsByLevelAndClass: async (req, res) => {
        try {
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
        } catch {
            res.sendStatus("503");
        }
    }
}