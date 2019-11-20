const axios = require("axios");
const router = require("express").Router();
const lobbyController = require("../../controller/lobbyController");

router.route("/new").post(lobbyController.createLobby);
router.route("/host/:hostId").get(lobbyController.findLobby);
router.route("/find/:lobbyId").get(lobbyController.findById);

module.exports = router;