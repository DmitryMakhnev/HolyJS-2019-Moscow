import { Dependency, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';
import { AuthorizationError } from '../errors/AuthorizationError';


@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  checkAuthorization(
    cb: (err: AuthorizationError | null, data?: void) => void
  ) {
    this.userService.getUser(err => {
      if (err !== null) {
        return cb(new AuthorizationError("Can't authorize user"));
      }
      cb(null);
    });
  }

}
