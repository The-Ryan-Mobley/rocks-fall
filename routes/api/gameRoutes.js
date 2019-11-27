const axios = require("axios");
const router = require("express").Router();
const spellController = require(`../../controller/spellController`);
const playerController = require("../../controller/playerController");

router
    .route("/spells/levelAndClass")
    .get(spellController.spellsByLevelAndClass)
router
    .route("/createCharacter")
    .post(playerController.createCharacter);

module.exports = router;
    