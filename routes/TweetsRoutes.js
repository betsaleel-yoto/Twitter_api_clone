const express = require("express");
const router = express.Router();
const {
  idUserTweets,
  allTweets,
} = require("../controllers/tweetsControleurs.js");

router.get("", allTweets);
router.get("/:id", idUserTweets);
router.post("");
router.delete("");
router.put("");


module.exports = router;
