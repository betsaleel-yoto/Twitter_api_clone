const express = require("express");
const router = express.Router();
const {
  Mesusers,
  IdUser,
  sendData,
  userDelete,
  editUsers,
} = require("../controllers/usersControleur.js");

router.get("/", Mesusers);
router.get("/:id", IdUser);
router.post("", sendData);
router.delete("/:id", userDelete);
router.put("", editUsers);

module.exports = router;