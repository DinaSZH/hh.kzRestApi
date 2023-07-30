const express = require("express");
const router = express.Router();
const { getExperinces, createVacancy, getMyVacancies, getVacancy } = require("./controllers");
const passport = require("passport");
const { isManager } = require("../auth/middlewares");
const { validateVacancy} = require('./middlewares')

router.get("/api/experiences", getExperinces);
router.post("/api/vacancy",  passport.authenticate('jwt', {session: false}) , isManager, validateVacancy, createVacancy);
router.get("/api/vacancy",  passport.authenticate('jwt', {session: false}) , isManager, getMyVacancies);
router.get("/api/vacancy/:id", getVacancy);

module.exports = router;