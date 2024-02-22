const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../models');

const prisma = new PrismaClient();
const SECRET_KEY = 'root'; 

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const userId = decoded.userId;

    // Ajout l'ID de l'utilisateur à l'objet de requête pour une utilisation ultérieure
    req.userId = userId;

    // Vérifie si l'utilisateur existe dans la base de données
    const utilisateur = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!utilisateur) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Si l'utilisateur existe, passez à l'étape suivante du middleware
    next();
  } catch (error) {
    console.error('Erreur de vérification du token:', error);
    return res.status(403).json({ message: 'Token verification failed' });
  }
};

module.exports = authenticateToken;
