import { AbstractComponent, Dependency, Either } from "@renderilnik/core";
import { ConferenceService } from '../srvices/ConferenceService';


export class HomePageComponent extends AbstractComponent {

  errors: Error[] = [];

  @Dependency
  private conferenceService: ConferenceService;

  async getData(): Promise<void> {

    const result = await Promise.all([
      this.conferenceService.getSpeakers(),
      this.conferenceService.getTalks(),
    ]);

    Either.mergeInMany(result)
      .mapLeft(errors => {
        this.errors = errors;
      });

  }

  render(): string {
    console.log(this.errors);

    return this.errors.length
      ? `${this.errors.map(error => error.message).join(', ')}`
      : 'good conference';
  }

}
