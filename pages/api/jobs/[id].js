// pages/api/jobs.js
import connectDB from '../utils/connectDB';
import PostModel from '../models/Post';

connectDB(); // Connectez-vous à la base de données

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const post = await PostModel.findById(id);
      if (!post) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching Job details' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  return null;
}
