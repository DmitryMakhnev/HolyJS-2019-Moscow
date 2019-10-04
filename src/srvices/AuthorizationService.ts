import { Dependency, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';
import { AuthorizationError } from '../errors/AuthorizationError';
import { Failed } from '../errors/Failed';
import { Ok } from '../errors/Ok';


@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  checkAuthorization(): Promise<Ok<void> | Failed<AuthorizationError>> {
    return this.userService
      .getUser()
      .then(
        e =>
          e instanceof Failed
            ? new Failed(new AuthorizationError("Can't authorize user"))
            : undefined
      );
  }

}
