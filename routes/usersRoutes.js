const express = require("express");
const router = express.Router();
const {
  Mesusers,
  IdUser,
  sendData,
  userDelete,
  editUsers,
} = require("../controllers/usersControleur.js");
const passport = require('passport');
const { authenticateJWT } = require('../controllers/controllersAuthentify.js');


router.get("/", Mesusers);
router.get("/:id", IdUser);
router.post("", sendData);
router.post("/aut",authenticateJWT,passport.initialize());
router.delete("/:id", userDelete);
router.put("", editUsers);

module.exports = router;