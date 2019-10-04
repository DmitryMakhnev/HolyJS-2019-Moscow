import { Dependency, Either, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';
import { AuthorizationError } from '../errors/AuthorizationError';


@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  async checkAuthorization(): Promise<Either<AuthorizationError, void>> {
    const user = await this.userService.getUser();
    return user
      .mapLeft(() => new AuthorizationError("Can't authorize user"))
      .mapRight(() => {});
  }

}
