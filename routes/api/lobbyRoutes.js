const axios = require("axios");
const router = require("express").Router();
const lobbyController = require("../../controller/lobbyController");

router.route("/new").post(lobbyController.createLobby);
router.route("/host/:hostId").get(lobbyController.findLobby);

module.exports = router;