const axios = require("axios");
const router = require("express").Router();
const lobbyController = require("../../controller/lobbyController");

router
    .route("/lobby/new")
    .get(lobbyController.createLobby);