const { PrismaClient } = require('../models');


const prisma = new PrismaClient()


const Mesusers = async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Récupère tous les utilisateurs depuis la base de données
    res.json(users); // Renvoie les utilisateurs en tant que JSON
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};


const IdUser = (req, res) => {
  // const id = parseInt(req.params.id);
  // res.send(
  //   usersTwitter.filter((element) => {
  //     return element.id === id;
  //   })
  // );
};

const sendData = async (req, res) => {
  try {
    const { email, username } = req.body; // Récupère les données du corps de la requête

    const user = await prisma.user.create({
      data: {
        email,
        username,
      },
    });

    console.log("User created:", user);
    res.status(201).json(user); // Renvoie la réponse avec le nouvel utilisateur créé
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};

const userDelete = async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Récupère l'ID de l'utilisateur à supprimer depuis les paramètres de la requête

    // Utilise Prisma pour supprimer l'utilisateur de la base de données
    const deletedUser = await prisma.user.delete({
      where: { id }, // Spécifie l'utilisateur à supprimer en utilisant son ID
    });

    console.log("User deleted:", deletedUser);

    res.status(200).json({ message: "User deleted successfully" }); // Renvoie une réponse JSON indiquant que l'utilisateur a été supprimé avec succès
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Gère les erreurs internes du serveur
  }
};


const editUsers = (req, res) => {
  res.send("modification enregistrée");
};
module.exports = {
  Mesusers,
  IdUser,
  sendData,
  userDelete,
  editUsers,
};
