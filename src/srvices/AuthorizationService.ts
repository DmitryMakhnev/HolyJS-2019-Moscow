import { Dependency, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';
import { UserError } from '../errors/UserError';
import { AuthorizationError } from '../errors/AuthorizationError';


@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  async checkAuthorization() {
    try {
      await this.userService.getUser();
    } catch (e) {
      if (e instanceof UserError) {
        throw new AuthorizationError('Can\'t authorize user');
      }
      throw e;
    }
  }

}
