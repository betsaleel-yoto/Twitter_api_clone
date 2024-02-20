const { PrismaClient } = require('../models');

const prisma = new PrismaClient();

const verifierUtilisateur = async(req, res) => {
    try {
      const userInfo = req.body; 
  
      // Vérifier si l'utilisateur existe
      const utilisateur = await verification(userInfo);
      
      // Renvoyer le résultat
      res.status(200).json({ message: utilisateur });
    } catch (error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur:", error);
      res.status(500).json({ error: "Une erreur s'est produite lors de la vérification de l'utilisateur" });
    }
  }

  async function verification(userInfo) {
    try {
      const utilisateur = await prisma.user.findFirst({
        where: {
          OR: [
            { email: userInfo.email },
            { username: userInfo.username }
          ],
        },
      });
  
      if (utilisateur) {
        return "oui, l'utilisateur existe.";
      } else {
        return "non, l'utilisateur n'existe pas.";
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la vérification de l'utilisateur:", error);
      throw error;
    }
  }

module.exports={
    verifierUtilisateur
}