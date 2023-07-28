const express = require("express");
const router = express.Router();
const { getSpecializations } = require("./controllers");

router.get("/api/specializations", getSpecializations);

module.exports = router;