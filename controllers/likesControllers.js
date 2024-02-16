const { PrismaClient } = require('../models');
const prisma = new PrismaClient();


// Partie like et Unlike 
let tweetLikes = {};

const totalLikes = async (req, res) => {
    const tweetId = parseInt(req.params.id);
  
    try {
      const totalLikes = await prisma.like.count({
        where: { tweetId },
      });
  
      res.json({ likes: totalLikes });
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre total de likes :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération du nombre total de likes.' });
    }
  };


const like =async (req, res) => {
    const tweetId = parseInt(req.params.id);
    const userId = parseInt(req.params.UserId);
  
    try {
      const existingLike = await prisma.like.findFirst({
        where: { userId, tweetId },
      });
  
      if (existingLike) {
        res.status(400).json({ message: 'Le tweet a déjà été liké par cet utilisateur.' });
        return;
      }
  
      const newLike = await prisma.like.create({
        data: { userId, tweetId },
      });
  
      res.json({ message: 'Tweet liké avec succès.', like: newLike });
    } catch (error) {
      console.error('Erreur lors de l\'ajout d\'un like au tweet :', error);
      res.status(500).json({ error: 'Erreur lors de l\'ajout d\'un like au tweet.' });
    }
  };

const unlike=async (req, res) => {
    const tweetId = parseInt(req.params.id);
    const userId = parseInt(req.params.UserId);
  
    try {
      const existingLike = await prisma.like.findFirst({
        where: { userId, tweetId },
      });
  
      if (!existingLike) {
        res.status(400).json({ message: 'Le tweet n\'a pas encore été liké par cet utilisateur.' });
        return;
      }
  
      await prisma.like.delete({
        where: { id: existingLike.id },
      });
  
      res.json({ message: 'Like du tweet annulé avec succès.' });
    } catch (error) {
      console.error('Erreur lors de la suppression d\'un like du tweet :', error);
      res.status(500).json({ error: 'Erreur lors de la suppression d\'un like du tweet.' });
    }
  };

module.exports = {
    like,
    totalLikes,
    unlike,
  };