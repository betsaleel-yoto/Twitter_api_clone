const jwt = require('jsonwebtoken');
const { PrismaClient } = require("../models");

const prisma = new PrismaClient();

const SECRET_KEY = 'root'; 

const verifierUtilisateur = async (req, res) => {
  try {
    const userInfo = req.body;

    const utilisateur = await verification(userInfo);

    if (utilisateur.exists) {
      const token = jwt.sign({ userId: utilisateur.id }, SECRET_KEY); // Génère un token JWT

      res.status(200).json({ message: "redirect", token: token }); // Envoie le token dans la réponse
    } else {
      res.status(404).json({ message: "User not found" }); 
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la vérification de l'utilisateur:",
      error
    );
    res.status(500).json({
      error:
        "Une erreur s'est produite lors de la vérification de l'utilisateur",
    });
  }
};

async function verification(userInfo) {
  try {
    const utilisateur = await prisma.user.findFirst({
      where: {
        OR: [{ email: userInfo.email }, { username: userInfo.username }],
      },
    });

    if (utilisateur) {
      return { exists: true, id: utilisateur.id }; 
    } else {
      return { exists: false };
    }
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la vérification de l'utilisateur:",
      error
    );
    throw error;
  }
}

module.exports = {
  verifierUtilisateur,
};
