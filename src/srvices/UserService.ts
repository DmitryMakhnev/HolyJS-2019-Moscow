import { Dependency, Injectable } from '@renderilnik/core';
import { ApiService } from './ApiService';
import { UserError } from '../errors/UserError';
import { NetworkError } from '../errors/NetworkError';
import { Failed } from '../errors/Failed';
import { Ok } from '../errors/Ok';


type User = {
  email: string;
  password: string;
};


@Injectable
export class UserService {

  @Dependency
  private apiService: ApiService;

  getUser(): Promise<Ok<User> | Failed<UserError>> {
    return this.apiService
      .get("/user")
      .then(
        e =>
          e instanceof Failed
            ? new Failed(new UserError("User not found"))
            : e
      );
  }

}
