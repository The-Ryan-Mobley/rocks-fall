const axios = require("axios");
const router = require("express").Router();
const spellController = require(`../../controller/spellController`);

router
    .route("/spells/:class")
    .get(spellController.spellsByClass);
router
    .route("/spells/:level")
    .get(spellController.spellsByLevel);

module.exports = router;
    