import { User } from '../../models/user';
import { IHttpResponse } from '../protocols';

export interface IGetUserController {
  handle(): Promise<IHttpResponse<User[]>>;
}

export interface IGetUserRepository {
  getUser(): Promise<User[]>;
}
