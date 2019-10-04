import { Dependency, Injectable } from '@renderilnik/core';
import { ApiService } from './ApiService';
import { NetworkError } from '../errors/NetworkError';
import { UserError } from '../errors/UserError';


@Injectable
export class UserService {

  @Dependency
  private apiService: ApiService;

  async getUser() {
    try {
      return await this.apiService.get('/user')
    } catch (e) {
      if (e instanceof NetworkError) {
        throw new UserError('User not found');
      }
      throw e;
    }
  }

}
