import { Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';
import { NetworkError } from '../errors/NetworkError';


@Injectable
export class ApiService {

  async get(route: string) {
    try {
      return await fetch(route);
    } catch (e) {
      throw new NetworkError(e.message);
    }
  }

}
