import { Dependency, Either, Injectable } from '@renderilnik/core';
import { ApiService } from './ApiService';
import { SpeakersError } from '../errors/SpeakersError';
import { TalksError } from '../errors/TalksError';


type Speaker = {
  name: string;
}

type Talk = {
  title: string;
};


@Injectable
export class ConferenceService {

  @Dependency
  private apiService: ApiService;

  async getSpeakers(): Promise<Either<SpeakersError, Speaker[]>> {
    const speakers = await this.apiService.get('/speakers');
    return speakers.mapLeft(() => new SpeakersError('Can\'t get speakers'))
  }

  async getTalks(): Promise<Either<TalksError, Talk[]>> {
    const talks = await this.apiService.get('/talks');
    return talks.mapLeft(() => new TalksError('Can\'t get talks'))
  }

}

