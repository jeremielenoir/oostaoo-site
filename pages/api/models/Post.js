// models/Post.js
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contenu: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Files' }],
});

const PostModel = mongoose.models.Jobs || mongoose.model('Jobs', PostSchema);

export default PostModel;
