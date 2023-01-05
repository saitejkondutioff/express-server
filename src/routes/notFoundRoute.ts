import * as express from 'express';

const app = express();

app.get('/check', (req, res) => {
    res.send('I am ok');
})

app.listen(3000)
