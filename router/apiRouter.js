import express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    return res.json('Bank');
})

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

const accounts = [
    {
        name: 'John',
        surname: 'Doe',
        birthDate: '1988-08-01',
        balance: 888
    },
    {
        name: 'Emma',
        surname: 'Lee',
        birthDate: '1995-01-31',
        balance: 2222
    },
];

function findAccount(fullName) {
    const [name, surname] = fullName.split('-');
    return accounts.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase()
        && acc.surname.toLowerCase() === surname.toLowerCase()
    );
}

function doesAccountExist(name, surname) {
    return accounts.find(acc => acc.name.toLowerCase() === name.toLowerCase()
        && acc.surname.toLowerCase() === surname.toLowerCase())
}

apiRouter.get('/api/account', (req, res) => {
    return res.json(accounts);
});

apiRouter.post('/api/account', (req, res) => {
    const { name, surname, birthDate } = req.body;
    if (!name || !surname || !birthDate) {
        return res.json({ message: 'Trūksta reikalingos informacijos.' });
    }

    const ageNow = calculateAge(birthDate);
    if (ageNow < 18) {
        return res.json({ message: 'Sąskaitą gali susikurti tik pilnamečiai asmenys (18m. ir daugiau)' })
    }

    if (doesAccountExist(name, surname)) {
        return res.json({ message: 'Sąskaita su tokiu vardu jau egzistuoja' });
    }

    function createAccount(name, surname, birthDate) {
        const newAccount = { name, surname, birthDate, balance: 0 };
        accounts.push(newAccount);
    }

    return res.json({ message: 'Paskyra sukurta' });
});

apiRouter.get('/api/account/:fullName', (req, res) => {
    const fullName = req.params.fullName;
    const [name, surname] = fullName.split('-');
    const account = accounts.find(acc =>
        acc.name.toLowerCase() === name.toLowerCase()
        && acc.surname.toLowerCase() === surname.toLowerCase()
    );

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({
        name: account.name,
        surname: account.surname,
        birthDate: account.birthDate
    });
});

apiRouter.get('/api/account/:fullName/name', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({ name: account.name });
});

apiRouter.get('/api/account/:fullName/surname', (req, res) => {
    const fullName = req.params.fullName;
    const account = findAccount(fullName);

    if (!account) {
        return res.json({ message: 'Tokia paskyra nerasta.' });
    }

    return res.json({ surname: account.surname });
});