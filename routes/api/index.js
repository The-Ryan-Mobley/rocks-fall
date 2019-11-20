const router = require("express").Router();
const authRoutes = require("./authRoutes");
const gameRoutes = require("./gameRoutes");
const lobbyRoutes = require("./lobbyRoutes");

router.use("/auth", authRoutes);
router.use("/game", gameRoutes);
router.use("/lobby",lobbyRoutes);

module.exports = router;