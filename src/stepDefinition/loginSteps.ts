import { Given , When, Then} from '@cucumber/cucumber';
import { page } from '../support/hooks';
import { LoginActions } from '../pageAction/loginAction';
import { Utilities } from '../Utility/utillity';
let loginActions: LoginActions;

Given('user on the login page', async () => {
  loginActions = new LoginActions(page);
  await loginActions.navigateToLoginPage();
});
When('user enters valid Email-id "standard_user" and password "password"', async () => {
  await new Utilities(page).ULnavigateTouserCreationPage();
});

When('user enters invalid Email-id "wrong_user" and password "wrong_password"', async () => {
  await loginActions.wrongCredentials();
});

When('user click the login button', async () => {
  await loginActions.clickLoginButton();
});

Then('user should be redirected to the dashboard', async () => {
  await loginActions.verifySuccessfulLogin();
});
Then('user should see an error message "Incorrect email or password"', async () => {
  await loginActions.verifyErrorMessage();
});
