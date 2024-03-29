const { PrismaClient } = require('../models');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient()

const Mesusers = async (req, res) => {
  try {
    const users = await prisma.$transaction(async (prisma) => {
      return prisma.user.findMany(); // Récupère tous les utilisateurs depuis la base de données
    });
    res.json(users); // Renvoie les utilisateurs en tant que JSON
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};
const IdUser = async(req, res) => {
  const id=parseInt(req.params.id)
  try {
    const users = await prisma.$transaction(async (prisma) => {
      return prisma.user.findMany(); // Récupère tous les utilisateurs depuis la base de données
    });
    res.json(users.filter((element) => {
      return element.id === id;
    })); // Renvoie les utilisateurs par son id
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};

const sendData = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash du mot de passe avec bcrypt
    
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword, // Enregistre le mot de passe crypté dans la base de données
      },
    });

    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.error('Erreur lors de la création du user:', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};



const userDelete = async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Récupère l'ID de l'utilisateur à supprimer depuis les paramètres de la requête

    await prisma.$transaction(async (prisma) => {
      // Utilise Prisma pour supprimer l'utilisateur de la base de données
      const deletedUser = await prisma.user.delete({
        where: { id }, // Spécifie l'utilisateur à supprimer en utilisant son ID
      });

      console.log("User deleted:", deletedUser);

      res.status(200).json({ message: "User deleted successfully" }); // Renvoie une réponse JSON indiquant que l'utilisateur a été supprimé avec succès
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};


const editUsers = async (req, res) => {
  try {
    const { id } = req.params; // Récupère l'ID de l'utilisateur à mettre à jour depuis les paramètres de la requête
    const { email, username, password } = req.body; // Récupère les nouvelles données de l'utilisateur depuis le corps de la requête

    const hashedPassword = await bcrypt.hash(password, 10); // Hash du nouveau mot de passe avec bcrypt

    await prisma.$transaction(async (prisma) => {
      // Utilise Prisma pour mettre à jour l'utilisateur dans la base de données
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) }, // Spécifie l'utilisateur à mettre à jour en utilisant son ID
        data: { email, username, password: hashedPassword }, // Spécifie les nouvelles données de l'utilisateur
      });

      console.log('User updated:', updatedUser);
      res.status(200).json(updatedUser); // Renvoie les nouvelles données de l'utilisateur mises à jour en tant que réponse JSON
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Gère les erreurs internes du serveur
  }
};

module.exports = {
  Mesusers,
  IdUser,
  sendData,
  userDelete,
  editUsers,
};

