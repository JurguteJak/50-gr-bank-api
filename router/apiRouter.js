import express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    return res.json('Bank');
})

const account = [];

function doesAccountExist(name, surname) {
    return account.find(acc => acc.name === name && acc.surname === surname)
}

apiRouter.get('/api/account', (req, res) => {
    return res.json(account);
});

apiRouter.post('/api/account', (req, res) => {
    const { name, surname, birthDate } = req.body;
    if (!name || !surname || !birthDate) {
        return res.json({ message: 'Trūksta reikalingos informacijos.' });
    }

    if (doesAccountExist(name, surname)) {
        return res.json({ message: 'Sąskaita su tokiu vardu jau egzistuoja' });
    }

    function createAccount(name, surname, birthDate) {
        const newAccount = { name, surname, birthDate, balance: 0 };
        account.push(newAccount);
    }

    return res.json({ message: 'Paskyra sukurta' });
});