import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT;

app.get('/users', (req, res) => {
  res.status(200).send(JSON.stringify([{ nome: 'Diego' }]));
});

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`);
});
