import { AbstractComponent, Dependency } from "@renderilnik/core";
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

    // @ts-ignore
    this.errors = result
      .filter(data => data.isLeft())
      .map(data => data.value);

  }

  render(): string {
    console.log(this.errors);

    return this.errors.length
      ? `${this.errors.map(error => error.message).join(', ')}`
      : 'good conference';
  }

}
