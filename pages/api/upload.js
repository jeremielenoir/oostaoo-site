import { Formidable } from 'formidable';
import fs from 'fs';
import FileModel from './models/File';
import JobModel from './models/Job';
import connectDB from './utils/connectDB';

connectDB();
export const config = {
  api: {
    bodyParser: true,
  },
};
export default async function handler(req, res) {
  if (req.method === 'POST') {
    /* const token = req.body.token;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
    const response = await fetch(url, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.success) { */
    const dataContact = ' ';
    const jobId = req.query.id;
    const form = new Formidable;

    form.uploadDir = 'public/';
    form.keepExtensions = true;
    form.parse(req, (erreur, fields, files) => {
      if (erreur) {
        return res.status(500).json({ error: 'Erreur lors du parsing du fichier' });
      }
      const title = files.file[0].originalFilename;
      fs.readFile(files.file[0].filepath, async (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Erreur lors de la lecture du fichier' });
        }
        const contenu = data;
        const date = new Date();
        try {
          const newFile = await FileModel.create(
            {
              title, contenu, date, contact: dataContact,
            },
          );
          const Jobs = await JobModel.findById(jobId);
          Jobs.files.push(newFile._id);
          await Jobs.save();
          return res.status(200).json('upload success', newFile._id);
        } catch (error) {
          return res.status(500).json('Une erreur est survenu durant le transfère');
        }
      });
      fs.rm(files.file[0].filepath);
      return null;
    });
  } else {
    // Le token n'est pas valide, renvoyez une erreur
    return res.status(400).json({ message: 'Échec de la vérification reCAPTCHA' });
  }
  // }
  return null;
}
