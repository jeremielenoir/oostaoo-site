// utils/connectDB.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Utiliser la connexion existante
    return;
  }
  // Connectez-vous à MongoDB
  try {
    await mongoose.connect(MONGODB_URI);
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}

};

export default connectDB;
