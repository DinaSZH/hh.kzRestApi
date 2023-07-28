const express = require("express");
const router = express.Router();
const { getExperinces } = require("./controllers");

router.get("/api/experiences", getExperinces);

module.exports = router;