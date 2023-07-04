const express = require("express");
const router = express.Router();
const { getEmploymetTypes } = require("./controllers");

router.get("/api/employment-types", getEmploymetTypes);

module.exports = router;