export default function handler (req, res) {
    // Fonctionnement de l'API
    if(req.method !== 'POST') {
        res.status(405).json({message: 'INVALID_METHOD'});;
        return;
    }
}