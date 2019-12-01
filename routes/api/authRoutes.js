const axios = require("axios");
const router = require("express").Router();
const authController = require(`../../controller/authenticationController`);


router
    .connectroute("/new")
    .post(authController.addUser);
router
    .route("/login")
    .get(authController.loginUser);
router
    .route("/currentCharacter/:id")
    .put(authController.updateCurrent);

module.exports = router;