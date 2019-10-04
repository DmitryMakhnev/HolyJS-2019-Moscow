import { Dependency, Either, Injectable } from '@renderilnik/core';
import { ApiService } from './ApiService';
import { UserError } from '../errors/UserError';


type User = {
  email: string;
  password: string;
};


@Injectable
export class UserService {

  @Dependency
  private apiService: ApiService;

  async getUser(): Promise<Either<UserError, User>> {
    const maybeUser = await this.apiService.get("/user");
    return maybeUser.mapLeft(() => new UserError("User not found"));
  }

}
