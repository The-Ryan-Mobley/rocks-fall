const axios = require("axios");
const router = require("express").Router();
const authController = require(`../../controller/authenticationController`);


router.route("/new").post(authController.addUser);
router.route("/login").get(authController.loginUser);

module.exports = router;