const express = require("express");
const router = express.Router();
const {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
} = require("../controllers/tweetsControleurs.js");

let tweetLikes = {}; // Objet pour stocker l'état des likes par tweet

// Route pour obtenir le nombre total de likes d'un tweet
router.get('/:id/likes', (req, res) => {
  const tweetId = req.params.id;
  const likes = tweetLikes[tweetId] || 0;
  res.json({ likes });
});

// Route pour l'interaction avec les likes
router.put('/:id/like', (req, res) => {
  const tweetId = req.params.id;
  if (!tweetLikes[tweetId]) {
    tweetLikes[tweetId] = 1;
    res.json({ message: 'Tweet liked', likes: 1 });
  } else {
    tweetLikes[tweetId]++;
    res.json({ message: 'Tweet already liked', likes: tweetLikes[tweetId] });
  }
});

router.put('/:id/unlike', (req, res) => {
  const tweetId = req.params.id;
  if (!tweetLikes[tweetId] || tweetLikes[tweetId] === 0) {
    res.status(400).json({ message: 'Tweet not liked yet' });
  } else {
    tweetLikes[tweetId]--;
    res.json({ message: 'Tweet unliked', likes: tweetLikes[tweetId] });
  }
});


router.get("", allTweets);
router.get("/:id", idUserTweets);
router.post("", postTweets);
router.delete("/:id", removeTweets);
router.put("/:id", edtTweets);




module.exports = router;