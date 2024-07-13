const express = require("express");
const router = express.Router();
const registrationController = require("../../controller/registrationController");
const {emailVerification, verification} = require("../../controller/emailVerification");
const loginController = require("../../controller/loginController");

router.post('/registration', registrationController);
router.post('/emailVerification', emailVerification);
router.post('/login', loginController);
router.get('/verification/:id', verification)

module.exports = router;