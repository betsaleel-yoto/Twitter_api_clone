const express = require("express");
const router = express.Router();
const {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
} = require("../controllers/tweetsControleurs.js");




router.get("", allTweets);
router.get("/:id", idUserTweets);
router.post("", postTweets);
router.delete("", removeTweets);
router.put("", edtTweets);




module.exports = router;
