// models/File.js
import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  title: { type: String, required: true },
  contenu: { type: Buffer, required: true },
  fileType: { type: String, default: 'application/pdf' },
  contact: { type: String, required: true },
  date: { type: Date, required: true }
});

const FilesModel = mongoose.models.Files || mongoose.model('Files', FileSchema);

export default FilesModel;
