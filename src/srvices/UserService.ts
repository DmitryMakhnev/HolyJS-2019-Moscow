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

  getUser(cb: (err: UserError | null, data?: User) => void) {
    this.apiService.get("/user", (err, data) => {
      if (err !== null) {
        return cb(new UserError("User not found"));
      }
      cb(null, data);
    });
  }

}
