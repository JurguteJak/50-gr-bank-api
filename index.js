import express from 'express';
import { apiRouter } from './router/apiRouter.js';

const app = express();
const port = 3000;

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    return res.send('Sveiki atvykę į Banko API!');
})

app.get('/*', (req, res) => {
    return res.send('Ups...puslapis nerastas');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})