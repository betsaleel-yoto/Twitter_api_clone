const express = require("express");
const router = express.Router();
const upload = require("../routes/routesuplodImage.js");
const {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
  like,
  totalLikes,
  unlike,
} = require("../controllers/tweetsControleurs.js");



// Route pour obtenir le nombre total de likes d'un tweet
router.get("/:id/likes", totalLikes);

// Route pour l'interaction avec les likes
router.put("/:id/like", like);
router.put("/:id/unlike", unlike);

router.get("", allTweets);
router.get("/:id", idUserTweets);
router.post("", upload.single("image"), postTweets);
router.delete("/:id", removeTweets);
router.put("/:id", edtTweets);

module.exports = router;
