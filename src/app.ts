import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.send('Main Page');
});

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});