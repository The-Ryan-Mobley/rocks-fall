const axios = require("axios");
const router = require("express").Router();
const spellController = require(`../../controller/spellController`);
const playerController = require("../../controller/playerController");

router
    .route("/spells/levelAndClass")
    .get(spellController.spellsByLevelAndClass);
router
    .route("/characterList/:id")
    .get(playerController.listCharacters);
router
    .route("/createCharacter")
    .post(playerController.createCharacter);
router
    .route("/updateCharacter")
    .put(playerController.updateCharacter);
router
    .route("/deleteCharacter/:id")
    .delete(playerController.deleteCharacter);
router
    .route("/findCharacter/:id")
    .get(playerController.findCharacter);
router
    .route("/characterThumb/:id")
    .get(playerController.characterThumb);

module.exports = router;
    