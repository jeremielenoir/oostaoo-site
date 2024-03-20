// pages/api/login.js
import connectDB from './utils/connectDB';
import UsersModel from './models/User';
import bcrypt from 'bcrypt';

connectDB(); // Connectez-vous à la base de données

export default async function handler(req, res) {
  console.log(req.body);
    if (req.method === 'POST') {
      // Récupérer les données de connexion du corps de la requête
      const { username, email, password } = req.body;
      bcrypt.hash(password, 10,async (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        const user= await UsersModel.create({ username , email, password: hash });
        return res.status(200).json(user._id);
      });       
      }else {
    // Méthode HTTP non autorisée
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }
}