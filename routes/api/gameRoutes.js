const axios = require("axios");
const router = require("express").Router();
const spellController = require(`../../controller/spellController`);
const playerController = require("../../controller/playerController");

router
    .route("/spells/:class")
    .get(spellController.spellsByClass);
router
    .route("/spells/:level")
    .get(spellController.spellsByLevel);
router
    .route("/createCharacter")
    .post(playerController.createCharacter);

module.exports = router;
    