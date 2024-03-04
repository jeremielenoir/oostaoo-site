// utils/connectDB.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Utiliser la connexion existante
    return;
  }
  // Connectez-vous à MongoDB
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
