import express from 'express';
import { config } from 'dotenv';
import { MongoGetUserRepository } from './repositories/get-users/mongo-get-users';
import { GetUserController } from './controllers/get-users/get-users';

config();

const app = express();

const port = process.env.PORT;

app.get('/users', async (req, res) => {
  const mongoRepository = new MongoGetUserRepository();
  const userController = new GetUserController(mongoRepository);
  const { body, statusCode } = await userController.handle();
  res.send(JSON.stringify(body)).status(200);
});

app.listen(port, () => {
  console.log(`Listenig on port ${port}!`);
});
