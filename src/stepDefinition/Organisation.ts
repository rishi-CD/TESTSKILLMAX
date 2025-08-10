
import { Given , When, Then} from '@cucumber/cucumber';
import { page } from '../support/hooks';
import { OrganizationActions } from '../pageAction/Organisation';
let orgActions: OrganizationActions;

Given('I am logged in and on the organization creation page', async () => {
  orgActions = new OrganizationActions(page);
  await orgActions.navigateToCreationPage();
});

When('I fill the organization name as {string}', async (name: string) => {
  await orgActions.fillOrganizationName(name);
});

When('I enter address as {string}', async (address: string) => {
  await orgActions.fillAddress(address);
});

When('I select country as {string}', async () => {
  await orgActions.selectCountry();
});
When('I enter pin code as {string}', async () => {
  await orgActions.fillPincode();
});
When('I select state as {string}', async () => {
  await orgActions.selectstate();
});
When('I select city as {string}', async () => {
  await orgActions.selectcity();
});
When('I select assessment level {string}', async () => {
  await orgActions.selectAssessmentleve();
});

When('I click the {string} button', async () => {
  await orgActions.clickButton();
});

Then('I should see success message {string}', async () => {
  await orgActions.verifySuccessMessage();
});


