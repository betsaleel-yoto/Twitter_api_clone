const express = require("express");
const router = express.Router();
const { Mesusers,IdUser } = require("../controllers/usersControleur.js");


router.get("/", Mesusers);
router.get("/:id",IdUser);

module.exports = router;