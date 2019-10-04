import { Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';
import { NetworkError } from '../errors/NetworkError';


@Injectable
export class ApiService {

  async get(route: string): Promise<[any] | [null, NetworkError]> {
    try {
      return [await fetch(route)];
    } catch (e) {
      return [null, new NetworkError(e.message)];
    }
  }

}
