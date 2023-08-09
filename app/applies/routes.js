const express = require("express");
const router = express.Router();
const { createApply } = require("./controllers");
const {isEmployee} = require("../auth/middlewares");
const passport = require("passport");
const {validateApply} = require('./middlewares')

router.post("/api/applies", passport.authenticate('jwt', {session: false}) , isEmployee, validateApply, createApply);

module.exports = router;