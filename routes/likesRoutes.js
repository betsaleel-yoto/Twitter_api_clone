const express = require("express");
const router = express.Router();
const { like, totalLikes, unlike } = require("../controllers/likesControllers");

// Route pour obtenir le nombre total de likes d'un tweet
router.get("/:id/likes", totalLikes);

// Route pour l'interaction avec les likes
router.put("/:id/like/:UserId", like);
router.put("/:id/unlike/:UserId", unlike);

module.exports = router;
