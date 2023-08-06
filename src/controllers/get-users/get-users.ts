import { IGetUserController, IGetUserRepository } from './protocols';

export class GetUserController implements IGetUserController {
  constructor(private readonly getUserRespository: IGetUserRepository) {}

  async handle() {
    try {
      const users = await this.getUserRespository.getUser();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Something went wrong.',
      };
    }
  }
}
