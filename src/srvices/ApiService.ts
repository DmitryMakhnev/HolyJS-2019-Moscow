import { Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';
import { NetworkError } from '../errors/NetworkError';
import { Ok } from '../errors/Ok';
import { Failed } from '../errors/Failed';


@Injectable
export class ApiService {

  async get(route: string): Promise<Ok<any> | Failed<NetworkError>> {
    try {
      return new Ok(await fetch(route));
    } catch (e) {
      return new Failed(new NetworkError(e.message));
    }
  }

}
