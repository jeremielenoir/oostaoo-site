import FileModel from './models/File';
import connectDB from './utils/connectDB';
import { verifyToken } from './../authentification/auth';

connectDB();
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' });
    }
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Format de token invalide' });
    }
    const jwtToken = tokenParts[1];
    if (verifyToken(jwtToken)) {
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
                return res.send(buffer);
            } catch {
                return res.status(500);
            }
        }
    }
}
