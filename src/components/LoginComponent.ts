import { AbstractComponent, Dependency } from "@renderilnik/core";
import { AuthorizationService } from "../srvices/AuthorizationService";


export class LoginComponent extends AbstractComponent {

  @Dependency
  private authorizationService: AuthorizationService;

  isLoading = false;
  isLoggedIn = false;

  async getData(): Promise<void> {
    this.isLoading = true;
    return new Promise(resolve => {
      this.authorizationService.checkAuthorization(
        err => {
          if (err !== null) {
            console.log(`[${err.name}]: ${err.message}`);
          }
          this.isLoggedIn = err !== null;
          this.isLoading = false;
          resolve();
        }
      );
    });
  }

  render(): string {
    const { isLoading, isLoggedIn } = this;

    console.log(isLoading);
    console.log(isLoggedIn);

    return `Is logged in: ${isLoggedIn} \n Is loading: ${isLoading}`;
  }
}
