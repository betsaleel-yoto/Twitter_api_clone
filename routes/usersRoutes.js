const express = require("express");
const router = express.Router();
const { Mesusers } = require("../controllers/usersControleur.js");

router.get("/", Mesusers);

module.exports = router;
