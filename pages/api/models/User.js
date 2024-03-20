// models/users.js
import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UsersModel = mongoose.models.Users || mongoose.model('Users', UsersSchema);

export default UsersModel;
