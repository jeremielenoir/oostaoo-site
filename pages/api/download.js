import FileModel from './models/File';
import connectDB from './utils/connectDB';

connectDB();
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const fileId = req.query.id;
        try {
            const doc = await FileModel.findById(fileId);
            if (!doc) {
                res.status(404).send('Aucun CV pour ce job');
            }
            const buffer = doc.contenu;
            res.setHeader('Content-Disposition', `attachment; filename="${doc.title}"`);
            res.setHeader('Content-Type', 'application/pdf');
            res.send(buffer);
        } catch {
            res.status(500);
        }
    }
}
