import { Dependency, Injectable } from '@renderilnik/core';
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

  async getUser(): Promise<[User] | [null, UserError]> {
    const [user, err] = await this.apiService.get("/user");
    if (err !== null) {
      return [null, new UserError("User not found")];
    }
    return [user];
  }

}
