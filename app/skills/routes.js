const express = require("express");
const router = express.Router();
const { getAllSkills, getSkillsbyKey } = require("./controllers");

router.get("/api/skills", getAllSkills);
router.get("/api/skills/:key", getSkillsbyKey);

module.exports = router;