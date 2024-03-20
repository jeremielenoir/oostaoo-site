// models/Job.js
import mongoose from 'mongoose';
import FilesModel from './File';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contenu: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Files' }],
});

const JobModel = mongoose.models.Jobs || mongoose.model('Jobs', JobSchema);

export default JobModel;
