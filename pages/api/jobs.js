// pages/api/posts.js
import connectDB from './utils/connectDB';
import PostModel from './models/Post';

connectDB(); // Connectez-vous à la base de données

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET' && id) {
    try {
      const job = await PostModel.findById(id);
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching Job details' });
    }
  } else if (req.method === 'GET') {
    try {
      const jobs = await PostModel.find().populate('files');
      if (!jobs) {
        return res.status(404).json({ error: 'Job not found' });
      }
      return res.status(200).json(jobs);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching Job' });
    }
  } else if (req.method === 'POST') {
    const {
      title, description, contenu, image, status, date,
    } = req.body;
    try {
      const newPost = await PostModel.create(
        {
          title, description, contenu, image, status, date,
        },
      );
      return res.status(201).json({ 'id': newPost._id });
    } catch (error) {
      return res.status(500).json({ error: 'Error creating Job' });
    }
  } else if (req.method === 'PUT' && id) {
    const {
      title, description, contenu, image, status, date,
    } = req.body;
    try {
      const updateJob = await PostModel.updateOne(
        { _id: id }, // Utilisez _id ici, sauf si vous avez un champ personnalisé nommé 'id'
        {
          $set: {
            title,
            description,
            contenu,
            image,
            status,
            date,
          },
        },
      );
      return res.status(204).json({ updateJob });
    } catch (error) {
      return res.status(500).json({ error: 'Error update Job' });
    }
  } else if (req.method === 'DELETE' && id) {
    try {
      const deteleJob = await PostModel.deleteOne({ _id: id });
      return res.status(204).json(deteleJob._id);
    } catch (error) {
      return res.status(500).json({ error: 'Error delete Job' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  return null;
}
