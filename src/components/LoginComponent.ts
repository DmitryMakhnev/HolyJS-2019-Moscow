import { AbstractComponent, Dependency } from "@renderilnik/core";
import { AuthorizationService } from "../srvices/AuthorizationService";
import { UserService } from '../srvices/UserService';


export class LoginComponent extends AbstractComponent {

  @Dependency
  private authorizationService: AuthorizationService;

  @Dependency
  private userService: UserService;

  isLoading = false;
  isLoggedIn = false;

  async getData(): Promise<void> {
    this.isLoading = true;
    const [, error1] = await this.authorizationService.checkAuthorization();
    const [, error2] = await this.userService.getUser();
    this.isLoggedIn = error1 === null && error2 === null;
    if (error1 !== null) {
      console.log(`[${error1.name}]: ${error1.message}`);
    }if (error2 !== null) {
      console.log(`[${error2.name}]: ${error2.message}`);
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
