// utils/connectDB.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;

let connection = null;

async function connectToDatabase() {
  if (connection) {
    return connection;
  }
  // Connectez-vous à MongoDB
  try {
    connection = await mongoose.connect(MONGODB_URI);
    return connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

};

async function isDatabaseConnected() {
  if (!connection) {
    connection = await connectToDatabase();
    if (connection) {
      return true;
    }
    return false;
  }
  return connection.readyState === 1; // 1 indicates connected
};

module.exports = { connectToDatabase, isDatabaseConnected };
