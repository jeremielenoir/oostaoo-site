// pages/api/posts.js
import connectDB from './utils/connectDB';
import JobModel from './models/Job';
import { verifyToken } from './../authentification/auth';
connectDB(); // Connectez-vous à la base de données
export const config = {
  api: {
    responseLimit: '8mb',
  },
}
function passtoken(token){
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Token non fourni' });
  }
  const tokenParts = token.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Format de token invalide' });
  }
  return tokenParts[1];
}

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET' && !id) {
    try {
      const jobs = await JobModel.find().populate('files');
      if (!jobs) {
        return res.status(404).json({ error: 'Job not found' });
      }
      return res.status(200).json(jobs);
    } catch (error) {
      console.error('Error :', error);
      return res.status(500).json({ error: 'Error fetching Jobs' });
      
    }
  } else if (req.method === 'GET' && id) {
    try {
      const job = await JobModel.findById(id);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching Job détail' });
    }
  } else if (req.method === 'POST') {
    const token = req.headers.authorization;
    const jwtToken = passtoken(token);
    if (verifyToken(jwtToken)) {
      const {
        title, description, contenu, image, status, date,
      } = req.body;
      try {
        const newPost = await JobModel.create(
          {
            title, description, contenu, image, status, date,
          }
        );
        return res.status(201).json({ 'id': newPost._id });
      } catch (error) {
        return res.status(500).json({ error: 'Error creating Job' });
      }
    }
  } else if (req.method === 'PUT' && id) {
    const token = req.headers.authorization;
    const jwtToken = passtoken(token);
    if (verifyToken(jwtToken)) {
      const {
        title, description, contenu, image, status, date,
      } = req.body;
      try {
        const updateJob = await JobModel.updateOne(
          { _id: id }, // Utilisez _id ici, sauf si vous avez un champ personnalisé nommé 'id'
          {
            $set: {
              title,
              description,
              contenu,
              image,
              status,
              date,
            }
          },
        );
        return res.status(204).json({ updateJob });
      } catch (error) {
        return res.status(500).json({ error: 'Error update Job' });
      }
    }
  } else if (req.method === 'DELETE' && id) {
    const token = req.headers.authorization;
    const jwtToken = passtoken(token);
    if (verifyToken(jwtToken)) {
      try {
        const deteleJob = await JobModel.deleteOne({ _id: id });
        return res.status(204).json(deteleJob._id);
      } catch (error) {
        return res.status(500).json({ error: 'Error delete Job' });
      }
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  return null;
}
