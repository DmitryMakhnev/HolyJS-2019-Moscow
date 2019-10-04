import { Either, Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';
import { NetworkError } from '../errors/NetworkError';


@Injectable
export class ApiService {

  async get(route: string): Promise<Either<NetworkError, any>> {
    try {
      const data = await fetch(route);
      return Either.right(data);
    } catch (e) {
      return Either.left(new NetworkError(e.message));
    }
  }

}
