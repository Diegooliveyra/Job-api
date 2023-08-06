import { IGetUserRepository } from '../../controllers/get-users/protocols';
import { User } from '../../models/user';

export class MongoGetUserRepository implements IGetUserRepository {
  constructor() {}

  async getUser(): Promise<User[]> {
    return [
      {
        firstName: 'Diego',
        lastName: 'Oliveira',
        email: 'teste@teste.com',
        password: '12345678',
      },
    ];
  }
}
