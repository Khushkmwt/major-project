const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

router
 .route("/signup")
    .get(userController.renderSignupform)
    .post( wrapAsync (userController.signup));

router
 .route("/login")
    .get(userController.renderLoginform)
    .post( saveRedirectUrl,
    passport.authenticate("local", {
       failureRedirect: "/login",
       failureFlash: true, }),
  userController.Login);
router.get("/logout", userController.Logout);

module.exports = router ;