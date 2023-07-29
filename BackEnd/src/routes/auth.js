const express = require("express");
const { signin, signup } = require("../controller/auth");

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../Validators/auth");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
