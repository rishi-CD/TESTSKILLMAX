
import { Given , When, Then} from '@cucumber/cucumber';
import { page } from '../support/hooks';
import { OrganizationActions } from '../pageAction/Organisation';
import { Utilities } from '../Utility/utillity';
let orgActions: OrganizationActions;

Given('user logged in and on the organization creation page', async () => {
  orgActions = new OrganizationActions(page);
  await new Utilities(page).ULnavigateTouserCreationPage();
  await orgActions.navigateToCreationPage();
});
When('user fill the organization name as {string}', async (name: string) => {
  await orgActions.fillOrganizationName(name);
});

When('user enter address as {struserng}', async (address: string) => {
  await orgActions.fillAddress(address);
});

When('user select country as {string}', async (country: string) => {
  await orgActions.selectCountry(country);
});
When('user enter pin code as {string}', async (pincode: string) => {
  await orgActions.fillPincode(pincode);
});
When('user select state as {string}', async (state : string) => {
  await orgActions.selectstate(state);
});
When('user select city as {string}', async (city : string) => {
  await orgActions.selectcity(city);
});
When('user select assessment level {string}', async (level: string) => {
  await orgActions.selectAssessmentlevel(level);
});

When('user click the create button', async () => {
  await orgActions.clickButton();
});
When('user click the Create button without filling required fields',async()=>{
  await orgActions.clickButton();
});

Then('user should see success message {string}', async (message : string) => {
  await orgActions.verifySuccessMessage(message);
});

Then ('user should see error messages for all mandatory fields', async()=>{
  await orgActions.verifyerrorMessage();
})


