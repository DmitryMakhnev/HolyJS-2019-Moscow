import { AbstractComponent, Dependency } from "@renderilnik/core";
import { AuthorizationService } from "../srvices/AuthorizationService";


export class LoginComponent extends AbstractComponent {

  @Dependency
  private authorizationService: AuthorizationService;

  isLoading = false;
  isLoggedIn = false;

  async getData(): Promise<void> {
    this.isLoading = true;
    try {
      await this.authorizationService.checkAuthorization();
      this.isLoggedIn = true;
    } catch (e) {
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
