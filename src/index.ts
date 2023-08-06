import express from 'express';
import { config } from 'dotenv';
import { MongoGetUserRepository } from './repositories/get-users/mongo-get-users';
import { GetUserController } from './controllers/get-users/get-users';
import { MongoClient } from './database/mongo';

const main = async () => {
  config();
  const app = express();
  await MongoClient.connect();

  app.get('/users', async (req, res) => {
    const mongoRepository = new MongoGetUserRepository();
    const userController = new GetUserController(mongoRepository);
    const { body, statusCode } = await userController.handle();
    res.send(JSON.stringify(body)).status(200);
  });

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Listenig on port ${port}!`);
  });
};

main();
