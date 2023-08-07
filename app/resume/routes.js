const express = require("express");
const router = express.Router();
const {createResume, getMyResumes, getResume, deleteResume, editResume, searchResume} = require("./controllers")
const {isEmployee} = require("../auth/middlewares");
const {validateResume, isAuthorOfResume  } = require("./middlewares")
const passport = require("passport");

router.post("/api/resume", passport.authenticate('jwt', {session: false}) , isEmployee, validateResume, createResume);
router.get("/api/resume", passport.authenticate('jwt', {session: false}) , isEmployee, getMyResumes);
router.get("/api/resume/search", searchResume);
router.get("/api/resume/:id", passport.authenticate('jwt', {session: false}) , getResume);
router.delete("/api/resume/:id", passport.authenticate('jwt', {session: false}) , isEmployee, isAuthorOfResume, deleteResume);
router.put("/api/resume", passport.authenticate('jwt', {session: false}) , isEmployee, isAuthorOfResume, validateResume, editResume);

module.exports = router;