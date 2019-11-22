const axios = require("axios");
const router = require("express").Router();
const lobbyController = require("../../controller/lobbyController");

router.route("/new").post(lobbyController.createLobby);
router.route("/host/:hostId").get(lobbyController.findLobby);
router.route("/find/:lobbyId").get(lobbyController.findById);
router.route("/join").get(lobbyController.joinLobby);
router.route("/push/:lobbyId").put(lobbyController.updateActiveUsers);


module.exports = router;