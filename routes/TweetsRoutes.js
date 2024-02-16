const express = require("express");
const router = express.Router();
const upload = require("../routes/routesuplodImage.js");
const {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
} = require("../controllers/tweetsControleurs.js");


router.get("", allTweets);
router.get("/:id", idUserTweets);
router.post("", upload.single("image"), postTweets);
router.delete("/:id", removeTweets);
router.put("/:id", edtTweets);

module.exports = router;
