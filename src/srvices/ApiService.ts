import { Injectable } from '@renderilnik/core';
import { fetch } from '../modules/fetch';

@Injectable
export class ApiService {

  get(route: string) {
    return fetch(route);
  }

}
