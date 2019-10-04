import { Dependency, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';
import { AuthorizationError } from '../errors/AuthorizationError';


@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  async checkAuthorization(): Promise<[void] | [null, AuthorizationError]> {
    const [, err] = await this.userService.getUser();
    if (err !== null) {
      return [null, new AuthorizationError("Can't authorize user")];
    }
    return [undefined];
  }

}
