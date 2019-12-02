
const router = require("express").Router();
const authController = require(`../../controller/authenticationController`);


router
    .route("/new")
    .post(authController.addUser);
router
    .route("/login")
    .get(authController.loginUser);
router
    .route("/currentCharacter/:id")
    .put(authController.updateCurrent);
router
    .route("/newThumb/:id")
    .put(authController.updateThumb);

module.exports = router;