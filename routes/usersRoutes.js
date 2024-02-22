const express = require("express");

const router = express.Router();
const {
  Mesusers,
  IdUser,
  sendData,
  userDelete,
  editUsers,
} = require("../controllers/usersControleur.js");
const passport = require("passport");

router.get("/", Mesusers);
router.get("/:id", IdUser);
router.post("", sendData);
router.delete("/:id", userDelete);
router.put("/:id", editUsers);

module.exports = router;
