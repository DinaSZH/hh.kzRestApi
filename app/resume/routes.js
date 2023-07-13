const express = require("express");
const router = express.Router();
const {createResume} = require("./controllers")
const {isEmployee} = require("../auth/middlewares");
const {validateResume } = require("./middlewares")
const passport = require("passport");

router.post("/api/resume", passport.authenticate('jwt', {session: false}) , isEmployee, validateResume, createResume);

module.exports = router;