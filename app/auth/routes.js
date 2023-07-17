const express = require("express");
const router = express.Router();
const { sendVerificationEmail, verifyCode, signUp } = require("./controllers");

router.post("/api/auth/sendmail", sendVerificationEmail);
router.post("/api/auth/verifycode", verifyCode);


router.post("/api/auth/signup", signUp);

module.exports = router;
