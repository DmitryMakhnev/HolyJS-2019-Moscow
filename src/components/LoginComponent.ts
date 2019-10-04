import { AbstractComponent, Dependency } from "@renderilnik/core";
import { AuthorizationService } from "../srvices/AuthorizationService";
import { Ok } from '../errors/Ok';
import { Failed } from '../errors/Failed';


export class LoginComponent extends AbstractComponent {

  @Dependency
  private authorizationService: AuthorizationService;

  isLoading = false;
  isLoggedIn = false;

  async getData(): Promise<void> {
    this.isLoading = true;
    const isAuthorized = await this.authorizationService.checkAuthorization();
    this.isLoggedIn = isAuthorized instanceof Ok;
    if (isAuthorized instanceof Failed) {
      const e = isAuthorized.error;
      console.log(`[${e.name}]: ${e.message}`);
    }
    this.isLoading = false;
  }

  render(): string {
    const { isLoading, isLoggedIn } = this;

    console.log(isLoading);
    console.log(isLoggedIn);

    return `Is logged in: ${isLoggedIn} \n Is loading: ${isLoading}`;
  }
}
