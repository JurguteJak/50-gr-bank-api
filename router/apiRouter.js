import express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    return res.json('Bank');
})

const account = [];

apiRouter.get('/api/account', (req, res) => {
    return res.json(account);
});

apiRouter.post('/api/account', (req, res) => {
    const { name, surname, birthDate } = req.body;
    if (!name || !surname || !birthDate) {
        return res.json({ message: 'Trūksta reikalingos informacijos.' });
    }
    return res.json({ message: 'Paskyra sukurta' });
});