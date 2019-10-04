import { Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';
import { NetworkError } from '../errors/NetworkError';


@Injectable
export class ApiService {

  async get(route: string, cb: (err: NetworkError | null, data?: any) => void) {
    try {
      const data = await fetch(route);
      cb(null, data);
    } catch (e) {
      cb(new NetworkError(e.message));
    }
  }

}
