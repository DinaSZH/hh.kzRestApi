const express = require("express");
const router = express.Router();
const { createApply, getEmployeeApplies, deleteApply, acceptEmployee, declineEmployee,getVacancyApplies } = require("./controllers");
const {isEmployee, isManager} = require("../auth/middlewares");
const passport = require("passport");
const {validateApply, isAuthorOfApply,isApplyExist} = require('./middlewares')
const {isAuthorOfVacancy} = require('../vacancy/middlewares');

router.post("/api/applies", passport.authenticate('jwt', {session: false}) , isEmployee, validateApply, createApply);
router.get("/api/applies/employee", passport.authenticate('jwt', {session: false}) , isEmployee, getEmployeeApplies);
router.delete("/api/applies/:id", passport.authenticate('jwt', {session: false}) , isEmployee, isAuthorOfApply, deleteApply);

router.put("/api/applies/accept/employee", passport.authenticate('jwt', {session: false}) , isManager, isApplyExist, isAuthorOfVacancy, acceptEmployee);
router.put("/api/applies/decline/employee", passport.authenticate('jwt', {session: false}) , isManager, isApplyExist, isAuthorOfVacancy, declineEmployee);

router.get("/api/applies/vacancy/:id", passport.authenticate('jwt', {session: false}) , isManager, isAuthorOfVacancy, getVacancyApplies);

module.exports = router;