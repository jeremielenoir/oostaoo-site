// pages/api/login.js
import connectDB from './utils/connectDB';
import UsersModel from './models/User';
import bcrypt from 'bcrypt';
import { createToken } from './../authentification/auth';

connectDB(); // Connectez-vous à la base de données

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Récupérer les données de connexion du corps de la requête
    const { email, password } = req.body;
    try {
      // Vérifiez si l'utilisateur existe
      const user = await UsersModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }

      // Récupérez le mot de passe haché de l'utilisateur
      const hashedPassword = user.password;

      // Comparez le mot de passe fourni avec le mot de passe haché
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
      // Authentification réussie
      const token = createToken({ userId: user._id });
      return res.status(200).json(token);
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).json({ message: 'Erreur de serveur' });
    }
    // Vérifier les informations de connexion (c'est un exemple, vous devrez intégrer votre propre logique d'authentification)
  }
  else {
    // Méthode HTTP non autorisée
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }
}