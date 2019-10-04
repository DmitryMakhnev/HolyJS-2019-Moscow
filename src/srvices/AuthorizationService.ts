import { Dependency, Injectable } from '@renderilnik/core';
import { UserService } from './UserService';

@Injectable
export class AuthorizationService {

  @Dependency
  private userService: UserService;

  async checkAuthorization(): Promise<boolean> {
    const user = await this.userService.getUser();
    return user != null;
  }

}
