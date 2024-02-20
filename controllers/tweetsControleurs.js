const { PrismaClient } = require('../models');
const prisma = new PrismaClient();

const idUserTweets = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(
    tweets.filter((element) => {
      return element.id === id;
    })
  );
};

const allTweets = async (req, res) => {
  try {
    const tweets = await prisma.tweet.findMany();
    res.status(200).json(tweets);
  } catch (error) {
    console.error('Erreur lors de la récupération des tweets :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des tweets.' });
  }
};



const postTweets = async (req, res) => {
  const { text } = req.body;

  try {
    const tweet = await prisma.tweet.create({
      data: {
        text
      },
    });
    res.status(201).json(tweet);
  } catch (error) {
    console.error('Erreur lors de la création du tweet :', error);
    res.status(500).json({ error: 'Erreur lors de la création du tweet.' });
  }

};

const edtTweets =  async (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;

  try {
    const tweet = await prisma.tweet.update({
      where: { id },
      data: { text },
    });
    res.status(200).json(tweet);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du tweet :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du tweet.' });
  };
};

const removeTweets = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await prisma.tweet.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Tweet supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression du tweet :', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du tweet.' });
  }
};






module.exports = {
  idUserTweets,
  allTweets,
  postTweets,
  edtTweets,
  removeTweets,
};